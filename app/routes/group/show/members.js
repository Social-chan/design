import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { get } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let show = this.modelFor('group.show');

    return get(show, 'members');
  }
});
