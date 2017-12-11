import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),
  fullpage: computed('currentRouteName', function () {
    if (this.get('currentRouteName') === 'login') {
      return false;
    }

    return true;
  })
});
