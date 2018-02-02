import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    profile: { embedded: 'always' }
  }
});
