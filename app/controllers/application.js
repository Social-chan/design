import Controller from '@ember/controller'
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

export default class ApplicationController extends Controller {
  @service auth

  init() {
    this._super(...arguments)

    this.set('landingPages', [
      'index', 'login', 'register', 'recover', 'oauth', 'page.cookies',
      'page.about', 'page.subscribe', 'page.contact',
      'page.dmca', 'page.policies', 'not-found',
    ])
  }

  @menuItems computed
}
