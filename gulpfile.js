var gulp          = require('gulp'),
    // sourcemaps    = require('gulp-sourcemaps'),
    // autoprefixer  = require('gulp-autoprefixer'),
    // concat        = require('gulp-concat'),
    // sass          = require('gulp-sass'),
    // cleanCSS      = require('gulp-clean-css'),
    livereload    = require('gulp-livereload');
    // imagemin      = require('gulp-imagemin');


// gulp.task('default', ['sass', 'imgmin', 'watch']);



gulp.task('watch', function(){
  livereload.listen();
  gulp.watch( '*.php').on('change', livereload.changed);
  gulp.watch( 'css/*.css').on('change', livereload.changed);
  gulp.watch( '**/*.js').on('change', livereload.changed);
  // gulp.watch( 'sandbox.loc/Knyazeva_6/*.html').on('change', livereload.changed);
  // gulp.watch( 'sandbox.loc/Knyazeva_6/css/*.css').on('change', livereload.changed);
});

gulp.task( 'default', gulp.series('watch') );

  // gulp.watch( domen.name + '/src/*/*.scss', ['sass']);
  // gulp.watch( 'sandbox.loc/*.css').on('change', livereload.changed);
  // gulp.watch( domen.name + '/wp-content/themes/' + domen.theme + '/css/*.css').on('change', livereload.changed);

// gulp.task('imgmin', function(){
//   return gulp.src( domen.name + '/src/img/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest(domen.name + '/img'))
// });

// gulp.task('sass', function () {
//   return gulp.src( ['node_modules/bootstrap/scss/bootstrap-custom.scss', domen.name + '/src/sass/**/*.scss'] )
//     .pipe(sass().on('error', sass.logError))
//     .pipe(sourcemaps.init())
//     .pipe(autoprefixer())
//     .pipe(concat('main.css'))
//     .pipe(cleanCSS({ keepBreaks: true, compatibility: 'ie8' }))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest( domen.name + '/wp-content/themes/' + domen.theme + '/css/'));
// });