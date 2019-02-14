import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember-decorators/service';
import { get } from '@ember/object';

export default class Application extends Route.extend(ApplicationRouteMixin) {
  @service moment
  @service session
  @service auth

  beforeModel() {
    get(this, 'moment').setLocale('es');
    this._loadCurrentUser();
  }

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  }

  _loadCurrentUser() {
    return get(this, 'auth').load().catch(() => get(this, 'session').invalidate());
  }
}
