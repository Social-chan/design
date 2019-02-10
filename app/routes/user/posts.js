import Route from '@ember/routing/route'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
import RSVP from 'rsvp'
import { get } from '@ember/object'

export default class PostsRoute extends Route.extend(AuthenticatedRouteMixin) {
  model() {
    let user = this.modelFor('user');

    return RSVP.hash({
      user: user,
      posts: get(user, 'posts').then(res => {
        return res
      })
    });
  }
}
