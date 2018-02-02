import DS from 'ember-data';
import { htmlSafe } from '@ember/string';

export default DS.Transform.extend({
  deserialize(value) {
    return value;
  },

  serialize(value, options) {
    if (options.htmlSafe) {
      return htmlSafe(value);
    }

    return value;
  }
});
