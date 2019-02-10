import DS from 'ember-data'
import { attr, belongsTo } from '@ember-decorators/data'
import ModelTimestamps from '../mixins/model-timestamps';

const { Model } = DS

export default class Group extends Model.extend(ModelTimestamps) {
  @attr('string') name
  @attr('string') slug
  @attr('string') image
  @attr('string') cover
  @attr('string') about
  @attr('boolean') is_member
  @attr('number', {defaultValue: () => {return 0}}) members_count

  @belongsTo('group-type') groupType
  @belongsTo('user') author
}
