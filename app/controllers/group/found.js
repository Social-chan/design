import Controller from '@ember/controller'
import { inject as service } from '@ember-decorators/service'
// import { computed } from '@ember-decorators/object'

export default class GroupFound extends Controller {
  @service store

  init() {
    this._super(...arguments)

    // this.get('store')
    this.set('group', {})
  }
}
