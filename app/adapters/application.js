import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.social-chan.com',
  session: service('session'),
  headers: computed('session.authToken', function() {
    return {
      'API_KEY': this.get('session.authToken'),
      'API_VERSION': 1
    };
  })
});
