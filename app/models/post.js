import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Ember from 'ember';

export default DS.Model.extend({
  session: service(),

  content: DS.attr('string'),
  sticky: DS.attr('boolean'),
  comments_count: DS.attr('number', {
    defaultValue() { return 0; }
  }),
  kokoros_count: DS.attr('number', {
    defaultValue() { return 0; }
  }),
  kokored: DS.attr('string'),
  created_at: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  updated_at: DS.attr('date'),

  author: DS.belongsTo('user'),
  comments: DS.hasMany('comment', {
    inverse: 'post'
  }),

  isKokored: computed('kokored', 'session.user.id', function () {
    return Ember.String.w(this.get('kokored')).indexOf(this.get('session.user.id')) > -1
  })
});
