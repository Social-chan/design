import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import DS from 'ember-data';

const { NotFoundError } = DS;

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  model(params) {
    return this.get('store').findRecord('user', params.user_id, {
      include: 'profile'
    })
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
