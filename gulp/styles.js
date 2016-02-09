var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    handleErrors = require('./utils/handleErrors'),
    autoprefixer = require('gulp-autoprefixer'),
    argv = require('yargs').argv;
    browserSync = require('browser-sync');
    gulpLoadPlugins = require('gulp-load-plugins');
    // uncss = require('gulp-uncss');
    minifyCss = require('gulp-minify-css');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var env = argv.env == "production";

gulp.task('styles', function() {
    gulp.src('app/styles/*.scss')
    .pipe(plumber())
    .pipe($.sourcemaps.init())
    .pipe(sass({
        style: 'expanded',
        precision: 10,
        sourceComments: 'nope',
        includePaths: ['bower_components/foundation-sites/scss/', 'node_modules/bourbon/app/assets/stylesheets/'],
    })).on('error', handleErrors)
    .pipe(autoprefixer())
    .pipe(env ? minifyCss({keepBreaks: false}) : gutil.noop())

    //will not work when vue.js dynamically adds or removes classes/id's etc.
    // .pipe(uncss({
    //     html: ['app/**/*.html'],
    //     ignore: []
    // }))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(reload({stream: true}));
});
