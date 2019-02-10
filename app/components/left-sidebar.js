import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
import { action } from '@ember-decorators/object'
import { set, get } from '@ember/object'
import { classNames } from '@ember-decorators/component';

@classNames('h-full overflow-hidden')
export default class LeftSidebarComponent extends Component {
  @service auth

  isSubsidebarActive = false
  activeSection = ''

  @action
  toggleSubsidebar(section) {
    if (get(this, 'activeSection') === section)
      set(this, 'activeSection', '')

    if (get(this, 'activeSection') === '')
      this.toggleProperty('isSubsidebarActive')

    if (get(this, 'isSubsidebarActive') && get(this, 'activeSection') !== section)
      set(this, 'activeSection', section)
  }
}
