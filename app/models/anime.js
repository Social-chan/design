import DS from 'ember-data'
import { attr, belongsTo } from '@ember-decorators/data'
import ModelTimestamps from '../mixins/model-timestamps';

const { Model } = DS

export default class Anime extends Model.extend(ModelTimestamps) {
  @attr('string') title
  @attr('boolean') adult
  @attr('boolean') public
  @attr('string', {
    defaultValue: function () {
      return 'img/cover_default.jpg';
    }
  }) image
  @attr('string') about
  @attr('json') content
  @attr('date') published
  @attr('date') finished

  @belongsTo('user') author
}
