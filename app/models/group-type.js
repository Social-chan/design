import DS from 'ember-data'
import { attr, hasMany } from '@ember-decorators/data'

const { Model } = DS

export default class GroupType extends Model {
  @attr('string') name
  @attr('string') icon
  @attr('string', {
    defaultValue() {
      return 'indigo';
    },
  }) color

  @hasMany('group') groups
}
