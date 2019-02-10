import DS from 'ember-data'
import { attr, belongsTo, hasMany } from '@ember-decorators/data'
import { inject as service } from '@ember-decorators/service'

const { Model } = DS

export default class Post extends Model {
  @service auth

  @attr('string') content

  @attr('number', { defaultValue: 0 }) comments_count
  @attr('number', { defaultValue: 0 }) kokoros_count

  @attr('string') kokored
  @attr('date', { defaultValue: new Date }) created_at
  @attr('date') updated_at

  @belongsTo('user') author
  @hasMany('comment', { inverse: 'post' }) comments

  isKokored = this.get('kokored')
  isSticky = false
}
