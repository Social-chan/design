import DS from 'ember-data'
import { attr, belongsTo } from '@ember-decorators/data'

const { Model } = DS

export default class Profile extends Model {
  @attr('string') name
  @attr('string') surname
  @attr('string') bio
  @attr('string', {
    defaultValue() {
      return '/img/user_default.jpg';
    },
  }) avatar
  @attr('string') country
  @attr('string', {
    defaultValue() {
      return '/img/chat_bg.png';
    },
  }) bg_image
  @attr('date') birthday
  @attr('boolean') gender

  @belongsTo('post') sticky
}
