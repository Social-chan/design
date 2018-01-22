import DS from 'ember-data';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
import {equal} from '@ember/object/computed';

export default DS.Model.extend({
  session: service(),

  nickname: DS.attr('string'),
  email: DS.attr('string'),
  active: DS.attr('boolean'),
  created_at: DS.attr('date'),

  profile: DS.belongsTo('profile'),
  followers: DS.hasMany('user', { inverse: null }),
  follows: DS.hasMany('user', { inverse: null }),
  posts: DS.hasMany('post'),

  isLoggedIn: computed('id', 'session.user.id', function () {
    return this.get('id') === this.get('session.user.id');
  }),
  isActive: equal('active', true),
  // isSuscriber: equal('role.suscriber')

});
