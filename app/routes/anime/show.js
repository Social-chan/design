import Route from '@ember/routing/route';

export default class AnimeShow extends Route {
  model(params) {
    const peek = this.get('store').peekRecord('anime', params.anime_id);

    if (peek !== null) {
      return peek;
    } else {
      return this.get('store').findRecord('anime', params.anime_id);
    }
  }
}
