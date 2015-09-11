var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    handleErrors = require('./utils/handleErrors'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    argv = require('yargs').argv;
    browserSync = require('browser-sync');
    gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var env = argv.env != "production";

gulp.task('styles', function() {
    gulp.src('app/styles/*.scss')
    .pipe(plumber())
    .pipe($.sourcemaps.init())
    .pipe(sass({
        style: 'expanded',
        precision: 10,
        includePaths: ['.'],
        sourceComments: 'nope'
    })).on('error', handleErrors)
    .pipe(autoprefixer())
    .pipe(env ? gutil.noop() : minifyCSS())
    .pipe(gulp.dest('.tmp/styles/'))
    .pipe(reload({stream: true}));
});


// gulp.task('styles', () => {
//   return gulp.src('app/styles/*.scss')
//     .pipe($.plumber())
//     .pipe($.sourcemaps.init())
//     .pipe($.sass.sync({
//       outputStyle: 'expanded',
//       precision: 10,
//       includePaths: ['.']
//     }).on('error', $.sass.logError))
//     .pipe($.autoprefixer({browsers: ['last 1 version']}))
//     .pipe($.sourcemaps.write())
//     .pipe(gulp.dest('.tmp/styles'))
//     .pipe(reload({stream: true}));
// });
