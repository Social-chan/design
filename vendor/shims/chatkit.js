(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['chatkit'],
      __esModule: true,
    };
  }

  define('chatkit', [], vendorModule);
})();
