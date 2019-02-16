import Route from '@ember/routing/route';

export default class UserFriendsRoute extends Route {
  model() {
    let user = this.modelFor('user');

    return this.get('store').query('user', {
      include: 'profile',
      follows: user.get('id'),
    });
  }
}
