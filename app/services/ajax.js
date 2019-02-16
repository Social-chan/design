import AjaxService from 'ember-ajax/services/ajax'
import { inject as service } from '@ember-decorators/service'
import config from '../config/environment'
import { computed } from '@ember-decorators/object'
import { get } from '@ember/object'

export default class AjaxAppService extends AjaxService {
  @service session

  host = config.APP.apiHost

  @(computed('session.isAuthenticated').volatile())
  get headers() {
    const session = get(this, 'session')
    let headers = {}

    headers['App-Pragma'] = 'no-cache'

    if (get(session, 'isAuthenticated')) {
      session.authorize('authorizer:application', (headerName, headerValue) => {
        headers[headerName] = headerValue
      })
    }

    return headers
  }
}
