import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let user = this.modelFor('user');

    return RSVP.hash({
      user: user,
      posts: this.get('store').query('post', {
        author: user.get('id'),
      }),
    });
  },
});
