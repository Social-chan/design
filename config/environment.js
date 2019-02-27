'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'socialchan',
    environment,
    rootURL: '/',
    locationType: 'auto',
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
      apiHost: process.env.API_HOST,
      proxyHost: process.env.PROXY_HOST,
      meta: {
        description: "Red social anime y manga",
      },
      features: {
        anime: process.env.FEATURE_ANIME || 'false',
        manga: process.env.FEATURE_MANGA || 'false',
        music: process.env.FEATURE_MUSIC || 'false',
        clubs: process.env.FEATURE_CLUBS || 'false',
        lists: process.env.FEATURE_LISTS || 'false',
        monitor: process.env.FEATURE_MONITOR || 'false',
        search: process.env.FEATURE_SEARCH || 'false',
        chats: process.env.FEATURE_CHATS || 'false',
      }
    },

    moment: {
      allowEmpty: true,
      includeTimezone: 'all',
      includeLocales: ['es']
    },

    'ember-cli-string-helpers': {
      only: ['dasherize', 'underscore', 'html-safe'],
      except: ['titleize', 'capitalize']
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

    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_ID
    },

    emberAttacher: {
      tooltipClass: 'bg-white shadow p-0',
      animation: 'shift',
      arrow: true,
      lazyRender: true,
    }
  };

  // Hard-coded overrides
  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'next') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
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

  return ENV;
};
