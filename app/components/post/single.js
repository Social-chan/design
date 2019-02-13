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
  *showComments() {
    if (!this.get('post.hasComments') && !this.get('isActive')) {
      const comments = this.get('store').query('comment', {
        filter: {
          post_id: this.get('post.id')
        }
      })

      yield this.set('post.comments_count', comments.length)
      yield this.set('post.comments', comments)
    }

    yield this.toggleProperty('isActive')
  }

  @task({drop: true})
  *postPin() {
    // TODO: One place ajax URLs
    yield this.get('ajax').post(
      'posts/'+this.get('post.id')+'/sticky'
    );
  }

  @task({drop: true})
  *deletePost() {
    const post = this.get('post')
    yield post.deleteRecord()

    if (post.get('isDeleted')) yield post.save()
  }

  @action
  toggleActive() {
    this.get('showComments').perform()
  }

  @action
  addPin() {
    this.get('postPin').perform();
  }

  @action
  delete() {
    this.get('deletePost').perform();
  }
}
