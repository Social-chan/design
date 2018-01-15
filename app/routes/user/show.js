import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  actions: {
    error(error, transition) {
      console.log(error);
      if (error.status === '404') {
        this.replaceWith('index');
      } else {
        // Let the route above this handle the error.
        return true;
      }
    }
  }
});
