var dest = "./www/";
var src = './app';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
   images: {
    src: src + "/assets/images/**",
    dest: dest + "/assets/images"
  },
   markup: {
    src: src + "/index.html",
    dest: dest
  },
  lib: {
    src: [
      src + '/lib/lodash/dist/lodash.min.js', 
      src + '/lib/phaser/build/phaser.js', 
      src + '/lib/lokijs/src/lokijs.js',
      src + '/lib/stats.js/build/stats.min.js'
    ],
    dest: dest + '/lib'
  },
  test: {
    files: [
      dest + 'lib/libs.js',
      dest + 'app.js',
      'test/unit/**/*.js'
    ],
    karma: 'karma.conf.js'
  },
  browserify: {
    // Enable source maps
    debug: true,

     // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/main.js',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};