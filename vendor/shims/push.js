(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['push'],
      __esModule: true,
    };
  }

  define('push', [], vendorModule);
})();
