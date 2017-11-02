const gulp = require("gulp"),
      watch = require('gulp-watch'),
      concat = require("gulp-concat"),

      gzip = require('gulp-gzip');
      babelify = require('babelify'),
      uglify = require('gulp-uglify'),
      browserify = require('browserify'),
      streamify = require('gulp-streamify'),
      source = require('vinyl-source-stream'),
      sass = require('gulp-sass');

gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('productionMode',['apply-prod-environment', 'buildProduction'], function() {});

gulp.task('buildDebug', function () {
    return browserify({entries: './app/components/main.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('buildProduction', function () {
    return browserify({entries: './app/components/main.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('watchDebug', ['buildDebug', 'sass:watch'], function () {
    gulp.watch('./app/**/*.jsx', ['buildDebug']);
});

gulp.task('sass', function() {
  return gulp.src('./app/styles/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./app/styles/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/styles/**/*.scss', ['sass']);
});
