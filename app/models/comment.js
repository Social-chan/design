import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  created_at: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  updated_at: DS.attr('date'),

  author: DS.belongsTo('user'),
  post: DS.belongsTo('post', {
    inverse: 'comments'
  }),
});
