import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
// import { isAjaxError } from 'ember-ajax/errors';

export default Component.extend({
  ajax: service(),
  // TODO: Better way to
  router: service(),

  errorMessage: null,

  createUser: task(function * () {
    const formData = this.getProperties([
      'name', 'surname', 'email', 'nickname',
      'password',
    ]);

    yield this.get('ajax').post('user', {
      data: {
        email: formData.email,
        nickname: formData.nickname,
        password: formData.password,
        profile: {
          name: formData.name,
          surname: formData.surname,
        }
      }
    }).then(() => {
      this.get('router').transitionTo('login');
    }).catch((error) => {
      this.set('errorMessage', error.payload);
    });
  }).drop(),

  actions: {
    register() {
      this.get('createUser').perform();
    }
  }
});
