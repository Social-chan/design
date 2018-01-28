import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  author: DS.belongsTo('user'),
});
