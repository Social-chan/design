import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
import { action } from '@ember-decorators/object'
import { task } from 'ember-concurrency-decorators'

export default class PostKokoroButton extends Component {
  @service ajax

  @task({
    enqueue: true
  })
  kokoroPost = function*(id) {
    // TODO: One place ajax URLs
    yield this.get('ajax').put(`posts/${id}/kokoro`).then(response => {
      return this.set('post.kokoros_count', response)
    })

    yield this.get('post').incrementProperty('kokoros_count')
  }

  @action
  toggleKokoro(id) {
    if (!this.kokoroPost.isRunning) {
      this.kokoroPost.perform(id)
      this.get('post').toggleProperty('isKokored')
    }
  }
}
