import DS from 'ember-data'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support'
import config from '../config/environment'

const { JSONAPIAdapter } = DS;

export default class ApplicationAdapter extends JSONAPIAdapter.extend(DataAdapterMixin, AjaxServiceSupport) {
  init() {
    this._super(...arguments)

    this.setProperties({
      authorizer: 'authorizer:application',
      host: config.APP.apiHost,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated')
    xhr.setRequestHeader('Authorization', `Bearer ${access_token}`)
  }
}
