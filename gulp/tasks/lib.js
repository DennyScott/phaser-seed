var gulp = require('gulp');
var config = require('../config').lib
var concat = require('gulp-concat');

gulp.task('lib', function() {
  return gulp.src(config.src)
  	.pipe(concat('libs.js'))
    .pipe(gulp.dest(config.dest));
});