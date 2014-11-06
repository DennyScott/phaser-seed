var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('karma').server;
var shell = require('gulp-shell');
var traceur = require('gulp-traceur');
var traceurOptions = require('./config').traceur;
var sourcemaps = require('gulp-sourcemaps');

var path = {
	src: ['./app/**/*', '!./app/**/*.js'],
	dest: 'www/',
	es6Src: './app/js/**/*.js',
	es6Dest: 'www/js/',
	scripts: ['app/js/**/*.js']
};

gulp.task('build', function() {
	gulp.src(path.es6Src)
		.pipe(sourcemaps.init())
		.pipe(traceur(traceurOptions))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.es6Dest));
	gulp.src(path.src)
		.pipe(gulp.dest(path.dest));
});

gulp.task('movePackageJSON', function(){
	gulp.src('./package.json')
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

// Zip directory ( Working in Linux and OSX)
gulp.task('zip', shell.task([
  'zip -r app.nw www/*'
]));


gulp.task('connect', function() {
	connect.server({
		root: 'www',
		port:3000,
		open:true,
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch(path.scripts, ['build', 'reload']);
});

gulp.task('nw', ['build', 'movePackageJSON', 'zip']);

gulp.task('default', ['watch', 'build', 'connect']);