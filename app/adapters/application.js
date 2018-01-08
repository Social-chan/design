import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';
import {underscore} from '@ember/string';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  host: config.apiHost,
  headers: {
    'Content-Type': 'application/json',
    // 'API_VERSION': 1
  },

  pathForType: function(type) {
    return underscore(type);
  }
});
