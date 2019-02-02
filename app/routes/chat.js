import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
// import { get } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  chat: service(),

  didReceiveAttrs() {
    if (!this.get('chat.currentUser')) {
      this.get('chat.connect').perform();
    }

    return this.chat.get('currentUser').getAllRooms((rooms) => {
      this.set('chats', rooms);
    }, (error) => {
      // console.error(`Error getting rooms: ${error}`);
    });
  }
});
