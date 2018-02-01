import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from '../config/environment';

export default Route.extend({
  session: service(),

  headTags: function () {
    const obj = config.APP.meta;
    let arr = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];

        arr.push({
          type: 'meta',
          tagId: `meta-${key}-tag`,
          attrs: {
            name: key,
            content: element
          }
        })
      }
    }

    return arr;
  },
});
