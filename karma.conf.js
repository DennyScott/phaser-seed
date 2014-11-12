module.exports = function(config){
  config.set({

    basePath : './',

    autoWatch : true,
    reporters: ['progress', 'coverage'],

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
    'karma-coverage',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    preprocessors : {
      "www/app.js" : ['coverage']
    },

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};