import Route from '@ember/routing/route';
import { inject as service } from '@ember-decorators/service'
import { get } from '@ember/object'
import RSVP from 'rsvp'

const { resolve } = RSVP

export default class ChatRoute extends Route {
  @service chat

  model() {
    return get(this, 'chat').getChats()
  }
}
