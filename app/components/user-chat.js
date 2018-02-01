import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  notify: service(),
  chat: service(),
  session: service(),
  isRoomsActive: false,

  // TODO: Auto-init with init()
  // init() {
  //   this._super(...arguments);
  //   // console.log(this.get('session.user.nickname'));

  // },

  getAllRooms: task(function * () {
    this.get('chat.currentUser').getAllRooms((rooms) => {
      this.set('rooms', rooms);
      this.toggleProperty('isRoomsActive');
    }, (error) => {
      this.get('notify').error(`Error getting rooms: ${error}`);
    });
  }).drop(),

  joinRoom: task(function * (room) {
    this.get('chat.currentUser').joinRoom(room, {
      newMessage: (message) => {
        this.get('notify').info(`Received new message: ${message.text}`);
      }
    });
  }).drop(),

  postMessage: task(function * () {
    //
  }).drop(),

  actions: {
    connect() {
      if (!this.get('chat.currentUser')) {
        this.get('chat.connect').perform();
      } else {
        this.get('getAllRooms').perform();
      }
    }
  }
});
