import Component from '@ember/component';
import { inject as service } from '@ember/service';
// import InViewportMixin from 'ember-in-viewport';

export default Component.extend({
  session: service(),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
