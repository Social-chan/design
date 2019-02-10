import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
import { action } from '@ember-decorators/object'
import { task } from 'ember-concurrency-decorators'

export default class KokoroButtonComponent extends Component {
  @service ajax

  @task({
    enqueue: true
  })
  kokoroPost = function*(id) {
    // TODO: One place ajax URLs
    yield this.get('ajax').post(`posts/${id}/kokoro`).then(response => {
      return this.set('post.kokoros_count', response)
    })
  }

  @action
  toggleKokoro(id) {
    if (!this.kokoroPost.isRunning) {
      this.kokoroPost.perform(id)
      this.toggleProperty('isKokored')
    }
  }
}
