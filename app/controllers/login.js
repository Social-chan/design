import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {task} from 'ember-concurrency';

export default Controller.extend({
  session: service(),

  authenticate: task(function* () {
    yield this.get('session').authenticate(
      'authenticator:oauth2',
      identification, password,
      ['*'],
      {
        'Content-Type': 'application/json',
      }
    ).catch((reason) => {
      this.set('errorMessage', reason.error);
    }).then((response) => {
      this.transitionTo('feed');
    });


  }).drop(),

  actions: {
    authenticate() {
      this.get('authenticate').perform();
    }
  }
});
