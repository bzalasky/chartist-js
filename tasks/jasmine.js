/**
 * jasmine
 * =======
 *
 * Test settings
 *
 * Link: https://github.com/gruntjs/grunt-contrib-jasmine
 */

'use strict';

module.exports = function (grunt) {
  return {
    dist: {
      src: [
        '<%= pkg.config.src %>/scripts/core.js',
        '<%= pkg.config.src %>/scripts/event.js',
        '<%= pkg.config.src %>/scripts/class.js',
        '<%= pkg.config.src %>/scripts/base.js',
        '<%= pkg.config.src %>/scripts/svg.js',
        '<%= pkg.config.src %>/scripts/axes/axis.js',
        '<%= pkg.config.src %>/scripts/axes/step-axis.js',
        '<%= pkg.config.src %>/scripts/axes/linear-scale-axis.js',
        '<%= pkg.config.src %>/scripts/charts/line.js',
        '<%= pkg.config.src %>/scripts/charts/bar.js',
        '<%= pkg.config.src %>/scripts/charts/pie.js'
      ],
      options: {
        specs: '<%= pkg.config.test %>/spec/**/spec-*.js',
        helpers: '<%= pkg.config.test %>/spec/**/helper-*.js',
        vendor: [
          'http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
          'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
        ],
        styles: [
          '.tmp/styles/main.css'
        ],
        phantomjs: {
          'ignore-ssl-errors': true
        }
      }
    }
  };
};
