import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import DS from 'ember-data';

const { NotFoundError } = DS;

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  ajax: service(),

  model(params) {
    return RSVP.hash({
      group: this.get('store').findRecord('group', params.group_id),
      members: this.get('ajax').request(`/group/${params.group_id}/members`),
    });
  },

  actions: {
    error(error) {
      if (error instanceof NotFoundError) {
        // redirect to a list of all posts instead
        this.transitionTo('not-found');
      } else {
        // otherwise let the error bubble
        return true;
      }
    }
  }
});
