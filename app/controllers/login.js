import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Controller.extend({
  session: service(),

  authenticate: task(function* () {
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

  }).drop(),

  actions: {
    authenticate() {
      this.get('authenticate').perform();
    }
  }
});
