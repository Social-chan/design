import Component from '@ember/component';

export default Component.extend({
  isSubsidebarActive: false,
  activeSection: "",

  actions: {
    toggleSubsidebar(section) {
      this.toggleProperty('isSubsidebarActive');
      this.set('activeSection', section);
    }
  }
});
