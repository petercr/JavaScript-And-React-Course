var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('default', () => {
    console.log('Hello Rufus ;-0');
});

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