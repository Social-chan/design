import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  session: service(),
  store: service(),

  doPublish: task(function* () {
    const { content } = this.getProperties('content');

    let post = this.get('store').createRecord('post', {
      author: this.get('session.user'),
      content: content,
    })

    this.set('content', '');
    yield post.save();
  }),

  actions: {
    createPost() {
      this.get('doPublish').perform();
    }
  }
});
