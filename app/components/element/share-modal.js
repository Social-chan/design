import Component from '@ember/component'
import { action } from '@ember-decorators/object'

export default class ElementShareModal extends Component {
  isSelecting = true

  @action
  changePostSelection() {
    this.set('isSelecting', false);
  }
}
