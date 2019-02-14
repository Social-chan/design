import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default class AnimeIndex extends Route.extend(AuthenticatedRouteMixin) {
  model() {
    return RSVP.hash({
      animes: this.get('store').findAll('anime'),
      genres: this.get('store').query('genre', {
        music: false
      }),
    });
  }
}
