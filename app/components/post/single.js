import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
import { task } from 'ember-concurrency-decorators'
import { action } from '@ember-decorators/object'

export default class PostSingle extends Component {
  @service auth
  @service store
  @service ajax

  isActive = false

  @task({drop: true})
  *postComment() {
    const { content } = this.getProperties('content');

    let post = this.get('store').peekRecord('post', this.get('post.id'));
    let comment = this.get('store').createRecord('comment', {
      post_id: post.id,
      author: this.get('auth.user'),
      content: content,
    });

    this.set('content', '');
    post.get('comments').pushObject(comment);
    yield comment.save();
  }

  @task({drop: true})
  *showComments() {
    // TODO: Load comments at once, and no more times
  }

  @task({drop: true})
  *postPin() {
    // TODO: One place ajax URLs
    yield this.get('ajax').post(
      'posts/'+this.get('post.id')+'/sticky'
    );
  }

  @action
  toggleActive() {
    this.get('store').query('comment', {
      post_id: this.get('post.id'),
    }).then(result => {
      this.set('post.comments', result);
      this.toggleProperty('isActive');
    });
  }

  createComment() {
    this.get('postComment').perform();
  }

  addPin() {
    this.get('postPin').perform();
  }
}
