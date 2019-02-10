import DS from 'ember-data'
import { attr, belongsTo, hasMany } from '@ember-decorators/data'
import { inject as service } from '@ember-decorators/service'
import { computed } from '@ember-decorators/object';
import ModelTimestamps from '../mixins/model-timestamps';

const { Model } = DS

export default class Post extends Model.extend(ModelTimestamps) {
  @service auth

  @attr('string') content

  @attr('number', { defaultValue: 0 }) comments_count
  @attr('number', { defaultValue: 0 }) kokoros_count

  @attr('string') kokored

  @belongsTo('user') author
  @hasMany('comment', { inverse: 'post' }) comments

  @computed('kokored')
  get isKokored() {
    return this.get('kokored')
  }

  isSticky = false
}
