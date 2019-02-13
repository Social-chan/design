import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import RSVP from 'rsvp';
import DS from 'ember-data';

const { NotFoundError } = DS;

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  model(params) {
    return RSVP.hash({
      group: get(this, 'store').query('group', {
        id: params.group_id,
        include: 'author,author.profile'
      }),
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
