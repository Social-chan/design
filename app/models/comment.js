import DS from 'ember-data'
import { attr, belongsTo } from '@ember-decorators/data'
import ModelTimestamps from '../mixins/model-timestamps'

const { Model } = DS

export default class Comment extends Model.extend(ModelTimestamps) {
  @attr('string') content

  @belongsTo('user') author
  @belongsTo('post', {inverse: 'comments'}) post
}
