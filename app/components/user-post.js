import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  session: service(),
  store: service(),
  isActive: false,

  postComment: task(function* () {
    const { content } = this.getProperties('content');

    let post = this.get('store').peekRecord('post', this.get('post.id'));
    let comment = this.get('store').createRecord('comment', {
      post_id: post.id,
      author: this.get('session.user'),
      content: content,
    });

    this.set('content', '');
    post.get('comments').pushObject(comment);
    yield comment.save();
  }).drop(),

  showComments: task(function* () {
    // TODO: Load comments at once, and no more times
  }).drop(),

  actions: {
    toggleActive() {
      this.get('store').query('comment', {
        post_id: this.get('post.id'),
      }).then(result => {
        this.set('post.comments', result);
        this.toggleProperty('isActive');
      });
    },

    createComment() {
      this.get('postComment').perform();
    }
  }
});
