import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  ajax: service(),

  postJoin: task(function * (id) {
    yield this.get('ajax').post(
      'group/'+id+'/join'
    );
  }).drop(),

  actions: {
    join(id) {
      this.get('postJoin').perform(id);
    }
  }
});
