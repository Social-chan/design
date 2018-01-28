import AjaxService from 'ember-ajax/services/ajax';
import { inject as service } from '@ember/service';
import config from '../config/environment';
import { computed } from '@ember/object';

export default AjaxService.extend({
  session: service(),

  host: config.apiHost,
  headers: computed('session.isAuthenticated', function () {
    let session = this.get('session');
    let headers = {};

    headers['App-Pragma'] = 'no-cache';

    if (session.get('isAuthenticated')) {
      session.authorize('authorizer:application', (headerName, headerValue) => {
        headers[headerName] = headerValue;
      });
    }

    return headers;
  }).volatile(),
});
