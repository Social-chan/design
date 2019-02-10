import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  bio: DS.attr('string'),
  avatar: DS.attr('string', {
    defaultValue() {
      return '/img/user_default.jpg';
    },
  }),
  country: DS.attr('string'),
  bg_image: DS.attr('string', {
    defaultValue() {
      return '/img/chat_bg.png';
    },
  }),
  birthday: DS.attr('date'),
  gender: DS.attr('boolean'),

  sticky: DS.belongsTo('post'),
});
