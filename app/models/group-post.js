import DS from 'ember-data'
import { belongsTo } from '@ember-decorators/data'

const { Model } = DS

export default class GroupPost extends Model {
  @belongsTo('post') post
  @belongsTo('group') group
}
