import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  pagesInArray: [
    'index', 'login', 'cookies', 'about', 'suscribe',
    'contact', 'dmca', 'policies', 'not-found',
  ]
});
