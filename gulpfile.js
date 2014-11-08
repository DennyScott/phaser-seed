var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('karma').server;

var path = {
<<<<<<< HEAD
	src: ['./app/**/*', '!./app/js/**/*.js'],
	dest: 'www/',
	es6Src: './app/js/**/*.js',
	es6Dest: 'www/js/',
	scripts: 'app/js/**/*.js'	
=======
	src: './app/**/*',
	dest: 'www/',
	scripts: ['app/js/**/*.js', 'app/main.js']
>>>>>>> parent of f4346e9... Added Zephyr Core and Ecma 6
};

gulp.task('build', function() {
	gulp.src(path.src)
		.pipe(gulp.dest(path.dest));
});

gulp.task('reload', function() {
	gulp.src('./www')
		.pipe(connect.reload());
});

gulp.task('test', function() {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	});
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