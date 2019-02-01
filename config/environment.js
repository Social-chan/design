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
        groups: process.env.FEATURE_GROUPS,
        anime: process.env.FEATURE_ANIME,
        manga: process.env.FEATURE_MANGA,
        lists: process.env.FEATURE_LISTS,
        monitor: process.env.FEATURE_MONITOR,
        search: process.env.FEATURE_SEARCH,
        next: process.env.FEATURE_NEXT,
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
          id: process.env.GOOGLE_ANALYTICS_ID,
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
      tokenProvider: process.env.CHATKIT_PROVIDER,
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

  // Hard-coded overrides, just for testing (from now)
  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    ENV.APP.features.test = true;

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
