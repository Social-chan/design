import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  model() {
    let user_id = get(this, 'session.user.id');

    return RSVP.hash({
      groups: this.get('store').findAll('group'),
      groupTypes: this.get('store').findAll('group-type'),
      myGroups: this.get('store').query('group', {
        author: user_id
      }),
    });
  }
});