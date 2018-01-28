import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let user = this.modelFor('user');
    return this.get('store').query('group', {
      author: user.get('id'),
    });
  },
});
