const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');


// default task to be run for Gulp
gulp.task('default', () => {
    console.log('Hello Rufus ;-0');
});


gulp.task('minify', () => {
    gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

// takes in .hbs and converts it to .html
gulp.task('html', () => {
    return gulp.src('index.hbs')
        .pipe(handlebars({}, {
            batch: ['./partials']
        }))
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest('./'));
});