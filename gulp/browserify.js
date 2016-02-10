var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    browserify = require('browserify'),
    gStreamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    bundleLogger = require('./utils/bundleLogger'),
    handleErrors = require('./utils/handleErrors'),
    source = require('vinyl-source-stream'),
    _= require('lodash'),
    bowerResolve = require('bower-resolve');
    vueify = require('vueify');
    argv = require('yargs')
    .default({path : 'tmp'})
    .default({env : false})
    .argv;

var env = argv.env == "production";

gulp.task('browserify', function()
{
  var b = browserify([
    './app/src/index.js',
  ],
    {
      cache: {},
      packageCache: {},
      fullPaths: true,
      transform: vueify
    }),
    file = 'main.js',
    folder = './dist/scripts/';

    getBowerPackageIds().forEach(function (id) {
      var resolvedPath = bowerResolve.fastReadSync(id);
      console.log(resolvedPath);
      console.log(id);
      b.require(resolvedPath, {
        expose: id
      });
    });

    var bundler = b;

    var bundle = function() {
        bundleLogger.start();
        return bundler.bundle()
        .on('error', handleErrors)
        .pipe(source(file))
        // add ignoreFiles: ['.combo.js', '-min.js']
        .pipe(env ? gStreamify(uglify()) : gutil.noop())
        .pipe(gulp.dest(folder))
        .on('end', bundleLogger.end);
    };

    return bundle();
});

function getBowerPackageIds() {
  // read bower.json and get dependencies' package ids
  var bowerManifest = {};
  try {
    bowerManifest = require('../bower.json');
  } catch (e) {
    console.log("no bower json");
  }
  return _.keys(bowerManifest.dependencies) || [];

}
