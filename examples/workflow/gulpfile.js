'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');
var concat  = require('gulp-concat');

var tasks = {
    index:        './app/index.html',
    app:          './app/app.js',
    html:         './app/templates/**/*.html',
    controllers:  './app/controllers/**/*.js'
} ;

gulp.task( 'index', function(){
    gulp.src( tasks.index)
    .pipe( gulp.dest('./www/') )
    .pipe( connect.reload() );
});
gulp.task( 'app', function(){
    gulp.src(tasks.app)
    .pipe( gulp.dest( './www/js/') )
    .pipe( connect.reload() );
});
gulp.task('html', function() {
   gulp.src( tasks.html )
     .pipe(gulp.dest( './www/templates'))
     .pipe(connect.reload());
});

gulp.task('controllers',function(){
    gulp.src( tasks.controllers)
    .pipe( concat('controllers.js'))
    .pipe(gulp.dest( './www/js' ) )
    .pipe( connect.reload());
});

gulp.task('watch', function() {
   gulp.watch( tasks.html,       ['html']);
   gulp.watch( tasks.index,      ['index']);
   gulp.watch( tasks.app,        ['app']);
   gulp.watch( tasks.controllers,['controllers']);
 });

gulp.task('default', [ 'html','index' ,'app','controllers','watch']);
