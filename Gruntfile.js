module.exports = function (grunt) {
  'use strict';

    // load grunts tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
  	    },
    jsbeautifier: {
      options: {
        config: 'confgiFiles/.jsbeautifyrc'
      },
      all: {
        src: [
          
          'js/jquery.stringWrap.js',


        ]
      }
    },
  });

};