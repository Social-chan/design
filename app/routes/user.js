import Route from '@ember/routing/route'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
import { inject as service } from '@ember-decorators/service'
import { action } from '@ember-decorators/object'
import DS from 'ember-data'

const { NotFoundError } = DS;

export default class User extends Route.extend(AuthenticatedRouteMixin) {
  @service session

  model(params) {
    return this.get('store').findRecord('user', params.user_id, {
      include: 'profile'
    })
  }

  @action
  error(error) {
    if (error instanceof NotFoundError) {
      // redirect to a list of all posts instead
      this.transitionTo('not-found')
    } else {
      // otherwise let the error bubble
      return true
    }
  }
}
