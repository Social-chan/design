/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'socialchan',
    environment,
    // rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      meta: {
        description: "Red social anime y manga",
      },
      features: {
        groups: true,
        animes: true,
        mangas: true,
        lists: true,
        monitor: true,
        search: true,
        next: false,
      }
    },

    moment: {
      allowEmpty: true,
      includeTimezone: 'all',
      includeLocales: ['es']
    },

    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['production'],
        config: {
          id: 'UA-46471023-1',
          // Use `analytics_debug.js` in development
          debug: environment === 'development',
          // Use verbose tracing of GA events
          trace: environment === 'development',
          // Ensure development env hits aren't sent to GA
          sendHitTask: environment !== 'development',
          // Specify Google Analytics plugins
          require: []
        }
      },
    ],

    push: {
      icon: '/img/socialchan.jpg',
      // tag: 'socialchan',
    },

    chatkit: {
      instanceLocator: 'v1:us1:47788d05-ce54-4833-8249-dee98c28480f',
      secretKey: '4248a786-81c1-4647-9e82-b67656e3b7d6:VJrU7I5eW+FqdAsVZw8LmV8s9tnEIZOQue4Pnz0p5r8=',
    },

    emberAttacher: {
      tooltipClass: 'bg-white shadow p-0',
      animation: 'shift',
      arrow: true,
      lazyRender: true,
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // Enable/disable Social-chan features
    ENV.APP.features.search = false;

    // ENV.apiHost = 'http://192.168.100.2:8000';
    // ENV.apiHost = 'http://192.168.0.21:8000';
    ENV.apiHost = 'http://185.191.20.61:8000';

    // ENV.proxyHost = 'http://192.168.100.2:3001';
    // ENV.proxyHost = 'http://192.168.0.21:3001';
    ENV.proxyHost = 'http://185.191.20.61:3001';
    ENV.chatkit.tokenProvider = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/47788d05-ce54-4833-8249-dee98c28480f/token?instance_locator=v1:us1:47788d05-ce54-4833-8249-dee98c28480f';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    ENV.APP.features.test = true;

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.apiHost = 'https://api.social-chan.com';

    // Enable/disable Social-chan features
    // ENV.APP.features.next = true;
  }

  if (environment === 'next') {
    ENV.apiHost = 'https://api.social-chan.com';

    // Enable/disable Social-chan features
    ENV.APP.features.next = true;
  }

  return ENV;
};
