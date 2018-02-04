import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      get(this, 'metrics').trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('login');
  this.route('recover');
  this.route('oauth');
  this.route('page', function () {
    this.route('cookies');
    this.route('about');
    this.route('dmca');
    this.route('policies');
    this.route('subscribe');
    this.route('contact');
  });
  this.route('anime', function() {
    this.route('show', { path: '/:anime_id' });
  });
  this.route('manga');
  this.route('group', function() {
    this.route('found');
    this.route('show', { path: '/:group_id' }, function () {
      this.route('posts', { path: '/' });
      this.route('members');
      this.route('settings');
    });
  });
  this.route('user', { path: '/user/:user_id' }, function () {
    this.route('posts', { path: '/' });
    this.route('groups');
    this.route('followers');
    this.route('follows');
    this.route('anime');
    this.route('manga');
    this.route('music');
  });
  this.route('list');
  this.route('music');
  this.route('settings', function () {
    this.route('privacy');
    this.route('removal');
  });
  this.route('feed');
  this.route('concepts');
  this.route('not-found', { path: '/*path' });
  this.route('search');
  this.route('chat');
});

export default Router;
