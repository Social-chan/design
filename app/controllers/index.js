import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Controller.extend({
  // session: service(),

  swiperOptions: {
    mousewheelControl: true,
  },
});
