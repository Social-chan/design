import ApplicationAdapter from './application'

export default class UserAdapter extends ApplicationAdapter {
  urlForQueryRecord(query, modelName) {
    if (query.me) {
      const baseUrl = this.buildURL();
      delete query.me;
      return `${baseUrl}/${modelName}/me`;
    }

    return this._super(...arguments);
  }
}
