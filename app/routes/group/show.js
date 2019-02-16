import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object'
import { get } from '@ember/object';
import RSVP from 'rsvp';
import DS from 'ember-data';

const { NotFoundError } = DS;

export default class GroupShow extends Route.extend(AuthenticatedRouteMixin) {
  @service session

  model(params) {
    return RSVP.hash({
      group: get(this, 'store').query('group', {
        id: params.group_id,
        include: 'author,author.profile'
      }),
    });
  }

  @action
  error(error) {
    if (error instanceof NotFoundError) {
      // redirect to a list of all posts instead
      this.transitionTo('not-found');
    } else {
      // otherwise let the error bubble
      return true;
    }
  }
}
