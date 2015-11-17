var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  const files = [
    './dist/**/*'
  ];

  return gulp.src(files).pipe(ghPages());
});