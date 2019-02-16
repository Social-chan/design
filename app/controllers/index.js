import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
// import { task } from 'ember-concurrency';

export default class IndexController extends Controller {
  // session: service(),

  init() {
    this._super(...arguments);

    this.set('swiperOptions', {
      mousewheelControl: true,
    });
  }
}
