'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');

gulp.task('html', function() {
   gulp.src('./www/**/*.html')
     .pipe(connect.reload());
});

gulp.task('watch', function() {
   gulp.watch(['./app/**/*.html'], ['html']);
 });

gulp.task('default', ['watch']);
