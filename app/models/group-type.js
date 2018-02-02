import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  icon: DS.attr('string'),
  color: DS.attr('string'),

  group: DS.hasMany('group'),
});
