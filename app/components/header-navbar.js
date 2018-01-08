import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  session: service(),

  actions: {
    authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate(
        'authenticator:oauth2',
        identification, password,
        ['*'],
        {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      );
    }
  }
});
