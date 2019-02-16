/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const purgecss = require('@fullhuman/postcss-purgecss')

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    storeConfigInMeta: false,
    outputPaths: {
      app: {
        html: 'index.html',
        css: {
          'app': '/assets/socialchan.css'
        },
        js: '/assets/socialchan.js'
      },
      vendor: {
        css: '/assets/vendor.css',
        js: '/assets/vendor.js'
      }
    },
    // minifyJS: {
    //   enabled: (process.env.FORCE_MINIFY == 'true')
    // },
    // minifyCSS: {
    //   enabled: (process.env.FORCE_MINIFY == 'true')
    // },
    // sourcemaps: {
    //   enabled: !isEnv('next') && !isEnv('production'),
    //   extensions: ['js']
    // },
    fingerprint: {
      enabled: true
    },
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          require('tailwindcss')('./tailwind.js'),
          require('autoprefixer'),
          require('postcss-nested'),
          {
            module: purgecss,
            options: {
              content: ['./app/**/*.hbs', './app/**/.js'],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ["js", "hbs"]
                }
              ],
            }
          }
        ]
      }
    },
    '@ember-decorators/babel-transforms': {
      disable: false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('node_modules/pusher-chatkit-client/dist/web/chatkit.js');
  app.import('vendor/shims/chatkit.js');
  app.import('node_modules/push.js/bin/push.js');
  app.import('vendor/shims/push.js');

  return app.toTree();
};
