import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  moment: service(),
  session: service(),
  auth: service(),

  beforeModel() {
    this.get('moment').setLocale('es');
    this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('auth').load().catch(() => this.get('session').invalidate());
  }
});
