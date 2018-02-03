import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  landingPages: [
    'index', 'login', 'recover', 'oauth', 'page.cookies',
    'page.about', 'page.subscribe', 'page.contact',
    'page.dmca', 'page.policies', 'not-found',
  ],
  authPages: [
    'login', 'recover', 'oauth',
  ],
});
