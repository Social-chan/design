import DS from 'ember-data';
import { attr, hasMany } from '@ember-decorators/data'

const { Model } = DS;

export default class ChatModel extends Model {
  @attr('boolean') pinned
  @attr('string') title

  @hasMany('chat-user', { subcollection: false }) users
  @hasMany('message', { subcollection: true }) messages
}
