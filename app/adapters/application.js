import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, AjaxServiceSupport, {
  authorizer: 'authorizer:application',
  host: config.APP.apiHost,

  init() {
    this._super(...arguments);

    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },

  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');
    xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
  }
});
