import Controller from '@ember/controller';
import { inject as service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { task } from 'ember-concurrency-decorators';

export default class LoginController extends Controller {
  @service session;

  @task({
    drop: true
  })
  *authenticate() {
    const { identification, password } = this.getProperties('identification', 'password');

    yield this.get('session').authenticate(
      'authenticator:oauth2',
      identification, password,
      ['*'],
      {
        'Content-Type': 'application/json',
      }
    ).catch((error) => {
      this.set('errorMessage', error);
    }).then(() => {
      // TODO: GA metrics event
      // get(this, 'metrics').trackEvent(metrics);
      this.transitionToRoute('feed');
    });

  }

  @action
  login() {
    this.get('authenticate').perform();
  }
}
