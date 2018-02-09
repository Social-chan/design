import Service from '@ember/service';
import { inject as service } from '@ember/service';
import config from '../config/environment';
import { task } from 'ember-concurrency';
import request from 'ember-ajax/request';
// import { computed } from '@ember/object';

export default Service.extend({
  session: service(),

  init() {
    this._super(...arguments);

    // eslint-disable-next-line no-undef
    this.set('tokenProvider', new Chatkit.TokenProvider({
      url: config.chatkit.tokenProvider,
    }));
  },

  connectUser: task(function * () {
    let chatManager;

    // eslint-disable-next-line no-undef
    chatManager = new Chatkit.ChatManager({
      instanceLocator: config.chatkit.instanceLocator,
      tokenProvider: this.get('tokenProvider'),
      userId: this.get('session.user.id'),
    });

    yield chatManager.connect({
      delegate: {
        addedToRoom: (room) => {
          // eslint-disable-next-line no-console
          console.log(`Added to room ${room.name}`);
        },
        removedFromRoom: (room) => {
          // eslint-disable-next-line no-console
          console.log(`Removed from room ${room.name}`);
        }

      },
      onSuccess: (currentUser) => {
        console.log(`Conectado con éxito como ${currentUser.name}`);
        this.set('currentUser', currentUser);
      },
      onError: (error) => {
        if (error.statusCode === 404) {
          this.get('createUser').perform();
        } else {
          console.error(error.info.error_description);
        }
      }
    });
  }).restartable(),

  createUser: task(function * () {
    yield request('/user', {
      method: 'POST',
      host: config.proxyHost,
      data: {
        id: this.get('session.user.id'),
        name: this.get('session.user.nickname'),
      }
    }).then(result => {
      this.get('connect').perform(result.id);
    });
  }).drop(),
});
