import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default class Feed extends Route.extend(AuthenticatedRouteMixin) {
  model() {
    return RSVP.hash({
      posts: this.get('store').query('post', {
        include: 'author,author.profile',
        append: 'kokoros_count'
      }),
      populars: this.get('store').query('user', {
        page: { limit: 5 },
        include: 'profile',
      }),
    });
  }
}
