var gulp = require('gulp'),
gulpReact = require('gulp-react'),
gulpNodemon = require('gulp-nodemon');

gulp.task('jsx', function(){
  return gulp.src('*.jsx')
            .pipe(gulpReact())
            .pipe(gulp.dest('lib'));
})

gulp.task('node',['jsx'], function(){
  gulpNodemon({
    script:'lib/nodeHello.js',
    ext:'js'
  })
})

gulp.task('default', function(){
  gulp.start('node');
})
