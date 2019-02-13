import Component from '@ember/component';
import { inject as service } from '@ember-decorators/service';
import { task } from 'ember-concurrency-decorators';
import { action } from '@ember-decorators/object';
// import { isAjaxError } from 'ember-ajax/errors';

export default class ElementSignupForm extends Component {
  @service ajax
  // TODO: Better way to
  @service router

  errorMessage = null

  @task({drop: true})
  *createUser() {
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
  }

  @action
  register() {
    this.get('createUser').perform();
  }
}
