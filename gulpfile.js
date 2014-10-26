var gulp = require('gulp');
var connect = require('gulp-connect');

var path = {
	src: './app/**/*',
	dest: 'www/'
};

gulp.task('build', function() {
	gulp.src(path.src)
		.pipe(gulp.dest(path.dest));
});

gulp.task('connect', function() {
	connect.server({
		root: 'www',
		port:3000,
		livereload: true
	});
});

gulp.task('default', ['build', 'connect']);