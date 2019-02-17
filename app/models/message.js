import DS from 'ember-data';
import { attr, belongsTo } from '@ember-decorators/data'

const { Model } = DS;

export default class MessageModel extends Model {
  @attr('string') content
  @attr('date') read_at

  @belongsTo('chat-user') author
}
