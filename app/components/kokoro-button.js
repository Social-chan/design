import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  ajax: service(),

  kokoroPost: task(function * (id) {
    // TODO: One place ajax URLs
    yield this.get('ajax').post(`posts/${id}/kokoro`).then(response => {
      return this.set('post.kokoros_count', response);
    });
  }).drop(),

  actions: {
    toggleKokoro(id) {
      this.get('kokoroPost').perform(id);
      this.toggleProperty('isKokored');
    }
  }
});
