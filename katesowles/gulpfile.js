const gulp = require ('gulp');
const eslint = require ('gulp-eslint');
const mocha = require('gulp-mocha');

const js = ['**/*.js','!node_modules/**', '!gulpfile.js', '!package.json'];

gulp.task('lint', () => {
  return gulp.src(js).pipe(eslint({
    "rules": {
      "no-console": 0,
      "indent": [
        2,
        2
      ],
      "quotes": [
        2,
        "single"
      ],
    "linebreak-style": [
      2,
      "unix"
        ],
        "semi": [
          2,
          "always"
        ]
    }
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('run-tests', () => {
  return gulp.src('./test/**/*.js', {read: false})
  .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(js, ['lint', 'run-tests']);
});

gulp.task('test', ['lint','run-tests']);
gulp.task('default', ['test','watch']);
