import Controller from '@ember/controller';
// import {inject as service} from '@ember/service';
import {task} from 'ember-concurrency';

export default Controller.extend({
  // session: service(),

  createUser: task(function* () {
    const formData = this.getProperties([
      'email', 'nickname', 'password'
    ]);

    let user = this.get('store').createRecord('user', {
      email: formData.email,
      nickname: formData.nickname,
      password: formData.password,
    });

    yield user.save().catch((reason) => {
      this.set('errorMessage', reason.error);
    }).then(() => {
      this.transitionTo('login');
    });
  }).drop(),

  actions: {
    register() {
      this.get('createUser').perform();
    }
  }
});
