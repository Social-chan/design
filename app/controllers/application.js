import Controller from '@ember/controller';
import PerfectScrollController from 'ember-perfect-scroll/mixins/perfect-scroll-controller';
import { inject as service } from '@ember/service';

export default Controller.extend(PerfectScrollController, {
  session: service(),

  pagesInArray: [
    'index', 'login', 'cookies', 'about', 'suscribe',
    'contact', 'dmca', 'policies', 'not-found',
  ]
});
