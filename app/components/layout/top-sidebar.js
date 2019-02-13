import Component from '@ember/component'
import { classNames } from '@ember-decorators/component'
import { inject as service } from '@ember-decorators/service'
import { computed } from '@ember-decorators/object'

let menuItems = computed('auth.user.id', function () {
  const user = this.get('auth.user.id')

  return [
    {
      route: 'user',
      param: user,
      icon: 'fas fa-user',
    },
    {
      route: 'feed',
      param: '',
      icon: 'fas fa-comments',
    },
    {
      route: 'group',
      param: '',
      icon: 'fas fa-users',
    },
    {
      route: 'anime',
      param: '',
      icon: 'fas fa-film',
    },
    {
      route: 'manga',
      param: '',
      icon: 'fas fa-book',
    },
    {
      route: 'music',
      param: '',
      icon: 'fas fa-music',
    },
    {
      route: 'list',
      param: '',
      icon: 'fas fa-bookmark',
    }
  ]
})

@classNames('flex justify-center items-center w-full bg-indigo-darkest select-none scrolling-auto overflow-hidden z-50')
export default class TopSidebarComponent extends Component {
  @service auth

  @menuItems computed
}
