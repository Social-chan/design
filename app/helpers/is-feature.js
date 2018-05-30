import { helper } from '@ember/component/helper';
import config from '../config/environment';

export function isFeature(ref) {
  return config.APP.features[ref];
}

export default helper(isFeature);
