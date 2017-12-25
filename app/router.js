import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('anime');
  this.route('manga');
  this.route('groups');
  this.route('login');
  this.route('user');
  this.route('list');
  this.route('music');
  this.route('settings');
  this.route('feed');
});

export default Router;
