var gulp = require('gulp'),
gulpReact = require('gulp-react'),
gulpNodemon = require('gulp-nodemon'),
gulpWatch = require('gulp-watch');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('watch-jsx',['client-scripts'],function(){
  gulpWatch(['src/**/*.jsx'],{ignored: 'lib/'},function(){
    gulp.start('build');
  })
})

gulp.task('jsx', function(){
  return gulp.src('src/**/*.jsx')
            .pipe(gulpReact())
            .pipe(gulp.dest('bin'));
})

gulp.task('build',['client-scripts']);

gulp.task('node',['client-scripts','watch-jsx'], function(){
  gulpNodemon({
    script:'bin/server.js',
    ignore:['gulpfile.js'],
    ext:'js jsx'
  })
})

gulp.task('default', function(){
  gulp.start('node');
})

gulp.task('client-scripts', ['jsx'], function() {
  return browserify('./bin/Pages/index.js').bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('bin/Pages'))
})
