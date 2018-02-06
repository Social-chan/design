import Service from '@ember/service';
import config from '../config/environment';

export default Service.extend({
  init() {
    this._super(...arguments);

    // eslint-disable-next-line no-undef
    Push.Permission.request();
  },

  create(msg, options = {}) {
    // eslint-disable-next-line no-undef
    return Push.create(
      msg, Object.assign(config.push, options)
    );
  }
});
