import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';

export default class Oauth2 extends OAuth2PasswordGrant {
  serverTokenEndpoint = config.APP.apiHost + '/oauth/token'
  serverTokenRevocationEndpoint = config.APP.apiHost + '/oauth/revoke'
}
