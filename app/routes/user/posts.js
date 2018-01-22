import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  // model(params) {
  //   return this.get('store').query('post', {
  //     user_id: params.user_id
  //   }).then(function (posts) {
  //     return posts
  //   })
  // },
});
