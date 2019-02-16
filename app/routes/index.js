import Route from '@ember/routing/route';
import { inject as service } from '@ember-decorators/service';
import { get } from '@ember/object';
import config from '../config/environment';

export default class Index extends Route {
  @service session

  redirect() {
    if (get(this, 'session.isAuthenticated'))
      this.transitionTo('feed');
  }

  headTags = function () {
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
  }
}
