import Route from '@ember/routing/route'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
import { inject as service } from '@ember-decorators/service'
import RSVP from 'rsvp'
import { get } from '@ember/object'

export default class UserPosts extends Route.extend(AuthenticatedRouteMixin) {
  @service store

  model() {
    let user = this.modelFor('user');

    return RSVP.hash({
      user: user,
      posts: get(this, 'store').query('post', {
        include: 'author, author.profile',
        filter: {
          user_id: get(this, 'user.id')
        }
      })
    });
  }
}
