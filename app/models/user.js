import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  active: DS.attr('boolean'),
  created_at: DS.attr('date'),

  profile: DS.belongsTo('profile'),

});
