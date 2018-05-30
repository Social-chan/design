import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  bio: DS.attr('string'),
  country: DS.attr('string'),
  birthday: DS.attr('date'),
  gender: DS.attr('boolean'),

  extra: DS.attr('string'),

  sticky: DS.belongsTo('post'),

});
