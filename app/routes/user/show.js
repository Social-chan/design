import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import DS from 'ember-data';

const { NotFoundError } = DS;

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').findRecord('user', params.user_id);
  },

  actions: {
    error(error, transition) {
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
