import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { inject as service } from '@ember-decorators/service';

export default class PageHeader extends Component {
  @service session
  @service auth
  @service media

  @action
  logout() {
    this.get('session').invalidate();
  }
}
