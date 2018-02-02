import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let show = this.modelFor('group.show');

    return RSVP.hash({
      group: get(show, 'group'),
      posts: get(this, 'store').query('post', {
        group_id: get(show, 'group.id'),
      })
    });
  }
});
