import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { get } from '@ember/object';

export default class GroupShowMembers extends Route.extend(AuthenticatedRouteMixin) {
  model() {
    const show = this.modelFor('group.show');
    return get(show, 'group.members');
  }
}
