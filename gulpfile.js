var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify'); 
var concatCss = require('gulp-concat-css');


var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');

var gutil =   require( 'gulp-util');
var browserify =   require( 'browserify');
var babelify =   require ('babelify');
var source =   require ('vinyl-source-stream');

gulp.task('connect', function() {
  connect.server({
    root: 'public/',
    livereload: true
  });
})

gulp.task('css', function () {
  return gulp.src('src/style/other/*.css')
    
    .pipe(concatCss("main.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))

    .pipe(gulp.dest('public/style/'))
    
    .pipe(connect.reload());
});

gulp.task('css-index', function () {
  return gulp.src('src/style/index/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/style/'))
    .pipe(connect.reload());
});

gulp.task('css-catalog', function () {
  return gulp.src('src/style/catalog/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('public/style/'))
    .pipe(connect.reload());
});


 gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/'))
    .pipe(connect.reload())
});

/*
gulp.task('build', () => {
    return browserify({
            entries: 'src/js/App.js',
            extensions: ['.js'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        
        .pipe(source('build.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(connect.reload());

});
*/

// gulp.task('js-uglify', function() {  
//     return gulp.src('public/js/build.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('public/'))
// });

/*gulp.task('compress', function() {
  gulp.src('public/js/build.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('public/js'))
    .pipe(connect.reload())
}); */

gulp.task('watch', function () {
    gulp.watch('src/style/*.css', ['css'])
    gulp.watch('src/style/index/*.css', ['css-index'])
    gulp.watch('src/style/catalog/*.css', ['css-catalog'])
    gulp.watch('src/*.html',['html'])
    //gulp.watch('src/js/**/*.js',['build'])
    //gulp.watch('src/js/build.js',['compress'])
})

gulp.task('default', ['connect', 'watch']);