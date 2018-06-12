import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
// import { w } from '@ember/string';

export default DS.Model.extend({
  session: service(),

  content: DS.attr('string'),
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
    return this.get('kokored');
    // return w(this.get('kokored')).indexOf(this.get('session.user.id')) > -1
  }),
  isSticky: computed('author.profile.post_id', 'session.profile.post_id', function () {
    return false;
    // if (this.get('session.profile.post_id') !== null) {
    //   return this.get('author.profile.post_id') === this.get('session.profile.post_id');
    // }
  })
});
