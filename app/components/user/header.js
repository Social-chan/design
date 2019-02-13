import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
import { action } from '@ember-decorators/object'

export default class UserHeader extends Component {
  @service session

  @action
  logout() {
    this.get('session').invalidate()
  }
}
