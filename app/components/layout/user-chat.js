import Component from '@ember/component'
import { action } from '@ember-decorators/object'
import { inject as service } from '@ember-decorators/service'
import { task } from 'ember-concurrency-decorators'

export default class LayoutUserChat extends Component {
  @service chat
  @service auth
  isRoomsActive = false

  // TODO: Auto-init with init()
  // init() {
  //   this._super(...arguments);
  //   // console.log(this.get('auth.user.nickname'));
  // },

  @task({drop: true})
  *getAllRooms() {
    yield this.get('chat.currentUser').getAllRooms((rooms) => {
      this.set('rooms', rooms);
      this.toggleProperty('isRoomsActive');
    }, (error) => {
      // console.error(`Error getting rooms: ${error}`);
    });
  }

  @task({drop: true})
  *joinRoom(room) {
    yield this.get('chat.currentUser').joinRoom(room, {
      newMessage: (message) => {
        // console.log(`Received new message: ${message.text}`);
      }
    });
  }

  @task({drop: true})
  *postMessage() {
    //
  }

  @action
  connect() {
    if (!this.get('chat.currentUser')) {
      this.get('chat.connect').perform();
    } else {
      this.get('getAllRooms').perform();
    }
  }
}
