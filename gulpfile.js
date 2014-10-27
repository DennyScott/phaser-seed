var gulp = require('gulp');
var connect = require('gulp-connect');

var path = {
	src: './app/**/*',
	dest: 'www/',
	scripts: ['app/js/**/*.js', 'app/main.js']
};

gulp.task('build', function() {
	gulp.src(path.src)
		.pipe(gulp.dest(path.dest));
});

gulp.task('reload', function() {
	gulp.src('./www')
		.pipe(connect.reload());
});

gulp.task('connect', function() {
	connect.server({
		root: 'www',
		port:3000,
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch(path.scripts, ['build', 'reload']);
});

gulp.task('default', ['watch', 'build', 'connect']);