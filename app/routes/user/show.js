import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import DS from 'ember-data';

const { NotFoundError } = DS;

export default Route.extend(AuthenticatedRouteMixin, {
  actions: {
    error(error, transition) {
      if (error instanceof NotFoundError) {
        // redirect to a list of all posts instead
        this.transitionTo('user');
      } else {
        // otherwise let the error bubble
        return true;
      }
    }
  }
});
