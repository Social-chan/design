import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class UserFollows extends Route.extend(AuthenticatedRouteMixin) {
  model() {
    let user = this.modelFor('user');
    return this.get('store').query('user', {
      follows: user.get('id'),
    });
  }
}
