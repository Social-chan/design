import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let peek = this.get('store').peekRecord('anime', params.anime_id);

    if (peek !== null) {
      return peek;
    } else {
      return this.get('store').findRecord('anime', params.anime_id);
    }
  }
});
