import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  isSubsidebarActive: false,
  activeSection: "",

  actions: {
    toggleSubsidebar(section) {
      this.toggleProperty('isSubsidebarActive');
      this.set('activeSection', section);
    }
  }
});
