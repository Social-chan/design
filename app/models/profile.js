import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  bio: DS.attr('string'),
  avatar: DS.attr('string'),
  bg_image: DS.attr('string'),
  country: DS.attr('string'),
  birthday: DS.attr('date'),
  gender: DS.attr('boolean'),

  sticky: DS.belongsTo('post'),

});
