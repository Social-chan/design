import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';

export default Component.extend({
  ajax: service(),

  kokoroPost: task(function* (id) {
    yield this.get('ajax').post('post/' + id + '/kokoro').then(response => {
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
