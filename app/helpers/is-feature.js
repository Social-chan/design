import { helper } from '@ember/component/helper';
import config from '../config/environment';

export function isFeature(ref) {
  return config.APP.features[ref] === 'true';
}

export default helper(isFeature);
