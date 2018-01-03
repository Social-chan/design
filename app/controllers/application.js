import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),
  inApp: computed('currentRouteName', function () {
    if (this.get('currentRouteName') === 'login'
    || this.get('currentRouteName') === 'index') {
      return false;
    }

    return true;
  }),
  isHeaderpage: computed('currentRouteName', function () {
    if (this.get('currentRouteName') === 'index') {
      return true;
    }

    return false;
  })
});
