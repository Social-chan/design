import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
import { action } from '@ember-decorators/object'
import { task } from 'ember-concurrency-decorators';

export default class CommentCreate extends Component {
  @service auth
  @service store

  @task({drop: true})
  *createComment() {
    const { content } = this.getProperties('content');

    let post = this.get('store').peekRecord('post', this.get('post.id'));
    let comment = this.get('store').createRecord('comment', {
      post_id: post.id,
      author: this.get('auth.user'),
      content: content,
    });

    this.set('content', '')
    yield post.get('comments').pushObject(comment)
    yield comment.save()
    // TODO: Move to model as computed (counting related comments loaded)
    yield post.incrementProperty('comments_count')
  }

  @action
  create() {
    this.get('createComment').perform();
  }

  @action
  handleSubmit(ev) {
    if (ev.metaKey && ev.keyCode === 13) {
      this.create()
    }
  }
}
