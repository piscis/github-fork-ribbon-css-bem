const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const git = require('gulp-git');
const bump = require('gulp-bump');
const filter = require('gulp-filter');
const tagVersion = require('gulp-tag-version');

gulp.task('deploy', function() {
  const files = [
    './dist/**/*'
  ];

  return gulp.src(files).pipe(ghPages());
});


/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */
function inc(importance) {
  // bump the version number in those files
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type: importance}))
    .pipe(gulp.dest('./'));
}

gulp.task('patch', function() { return inc('patch'); });
gulp.task('feature', function() { return inc('minor'); });
gulp.task('release', function() { return inc('major'); });


gulp.task('tag', function(){

  const version = require('./package.json').version;
  const files = [
    './*',
    './.*',
    '!./node_modules',
    '!./build',
    '!./*.iml',
    '!./*.log',
    '!./.idea',
    '!./.git',
    '!./.publish'
  ];

  return gulp.src(files)
    .pipe(git.commit(`bump version ${version}`))
    .pipe(filter('package.json'))
    .pipe(tagVersion());
});