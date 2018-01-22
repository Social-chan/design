import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  createPost: task(function* () {
    const formData = this.getProperties([
      'content',
    ]);

    let user = this.get('store').createRecord('post', {
      content: formData.content,
    });

    yield user.save().catch((reason) => {
      this.set('errorMessage', reason.error);
    }).then(() => {
      this.transitionToRoute('feed');
    });
  }).drop(),

  actions: {
    create() {
      this.get('createPost').perform();
    }
  }
});
