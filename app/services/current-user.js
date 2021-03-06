import Service from '@ember/service';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', {}).then((user) => {
        this.set('data', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
