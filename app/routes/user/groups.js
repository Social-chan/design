import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class UserGroups extends Route.extend(AuthenticatedRouteMixin) {
  model() {
    let user = this.modelFor('user');
    return this.get('store').query('group', {
      include: 'author,author.profile,group-type',
      member: user.get('id'),
    })
  }
}
