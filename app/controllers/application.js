import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  session: service(),

  init() {
    this._super(...arguments);

    this.set('landingPages', [
      'index', 'login', 'register', 'recover', 'oauth', 'page.cookies',
      'page.about', 'page.subscribe', 'page.contact',
      'page.dmca', 'page.policies', 'not-found',
    ]);
  },

  menuItems: computed('session.user.id', function () {
    let user = this.get('session.user.id');

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
    ];
  }),
});
