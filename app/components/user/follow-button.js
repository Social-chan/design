import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  ajax: service(),

  followUser: task(function* (id) {
    yield this.get('ajax').post(`user/${id}/follow`);
  }).drop(),

  actions: {
    toggleFollow(id) {
      this.get('followUser').perform(id);
      this.toggleProperty('isFollowed');
    }
  }
});
