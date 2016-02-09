var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegtran = require('imagemin-jpegtran'),
    gifsicle = require('imagemin-gifsicle');


gulp.task('optimizeImages', function () {
    return gulp.src(['app/images/*.jpg', 'app/images/*.jpeg', 'app/images/*.gif', 'app/images/*.png'])
        .pipe(imagemin({
            progressive: false,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(), jpegtran(), gifsicle()]
        }))
        .pipe(gulp.dest('dist/images/'));
});
