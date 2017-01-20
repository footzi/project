var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify'); 
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch');

gulp.task('css', function () {
  return gulp.src('src/style/other/*.css')
    
    .pipe(concatCss("main.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))

    .pipe(gulp.dest('public/style/'))
    
   //g .pipe(connect.reload());
});

gulp.task('css-index', function () {
  return gulp.src('src/style/index/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/style/'))
    //.pipe(connect.reload());
});

gulp.task('css-catalog', function () {
  return gulp.src('src/style/catalog/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/style/'))
    //.pipe(connect.reload());
});

 gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/'))
    //gulp.pipe(connect.reload())
});



gulp.task('watch', function () {
    gulp.watch('src/style/*.css', ['css'])
    gulp.watch('src/style/index/*.css', ['css-index'])
    gulp.watch('src/style/catalog/*.css', ['css-catalog'])
    gulp.watch('src/*.html',['html'])
    //gulp.watch('src/js/**/*.js',['build'])
    //gulp.watch('src/js/build.js',['compress'])
})
