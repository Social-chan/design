import Service from '@ember/service';
import config from '../config/environment';

export default class PushService extends Service {
  init() {
    this._super(...arguments);

    // eslint-disable-next-line no-undef
    Push.Permission.request();
  }

  create(msg, options = {}) {
    // eslint-disable-next-line no-undef
    return Push.create(
      msg, Object.assign(config.push, options)
    );
  }
}
