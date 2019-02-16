import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  attrs = {
    profile: { embedded: 'always' }
  }
}
