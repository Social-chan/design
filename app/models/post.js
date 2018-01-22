import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  sticky: DS.attr('boolean'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  author: DS.belongsTo('user'),
});
