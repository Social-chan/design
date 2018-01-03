import Component from '@ember/component';

export default Component.extend({
  isSelecting: true,

  actions: {
    changePostSelection() {
      this.set('isSelecting', false);
    }
  }
});
