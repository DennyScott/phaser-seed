var gulp = require('gulp');
var config = require('../config').test;
var karma = require('gulp-karma');

gulp.task('test', ['build'], function() {
	return gulp.src(config.files)
    .pipe(karma({
      configFile: config.karma,
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});