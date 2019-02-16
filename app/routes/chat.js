import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember-decorators/service';
import { get } from '@ember/object';

export default class Chat extends Route.extend(AuthenticatedRouteMixin) {
  @service session
  @service auth
  @service chat

  didReceiveAttrs() {
    if (!get(this, 'chat.currentUser')) {
      get(this, 'chat.connect').perform();
    }

    return this.chat.get('currentUser').getAllRooms((rooms) => {
      this.set('chats', rooms);
    }, (error) => {
      // console.error(`Error getting rooms: ${error}`);
    });
  }
}
