import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  isSubsidebarActive: false,
  activeSection: '',

  actions: {
    toggleSubsidebar(section) {
      if (this.get('activeSection') === section)
        this.set('activeSection', '');

      if (this.get('activeSection') === '')
        this.toggleProperty('isSubsidebarActive');

      if (this.get('isSubsidebarActive') && this.get('activeSection') !== section)
        this.set('activeSection', section);
    }
  }
});
