var gulp = require('gulp');
var config = require('../config').lib

gulp.task('lib', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});