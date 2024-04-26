const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// SASS config
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

//IMAGES config
function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

//JS config
function compressJS() {
    return gulp.src('./src/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/script'));
}

exports.default = gulp.parallel(styles, images, compressJS);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles, compressJS))
}