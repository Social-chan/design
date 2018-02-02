import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  image: DS.attr('string'),
  cover: DS.attr('string'),
  about: DS.attr('string'),
  created_at: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  updated_at: DS.attr('date'),
  is_member: DS.attr('boolean'),
  members_count: DS.attr('number', {
    defaultValue() { return 0; }
  }),

  groupType: DS.belongsTo('group-type'),
  author: DS.belongsTo('user'),
});
