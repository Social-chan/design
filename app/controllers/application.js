import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Controller.extend({
  session: service(),

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
  }),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
