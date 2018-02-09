import SessionService from 'ember-simple-auth/services/session';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default SessionService.extend({
  store: service(),

  user: computed(function () {
    return this.get('store').queryRecord('user', {})
  })
})
