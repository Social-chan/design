import Service from '@ember/service';
import { inject as service } from '@ember-decorators/service'
import { get } from '@ember/object'

export default class ChatService extends Service {
  @service firebase
  @service store

  init() {
    this.setProperties({
      chats: get(this, 'firebase').getRecords('chats')
    })
  }

  getUsers() {
    return get(this, 'firebase').getRecords('users')
  }

  getChats() {
    return get(this, 'firebase').getRecords('chats')
  }
}
