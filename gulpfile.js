
const gulp = require('gulp');
const replace = require('gulp-replace');
const md  = require('markdown');


gulp.task('blog',function(){
    gulp.src('md/*.md')
        /*.pipe(function(source){
            return md.markdown.toHtml(source);
        })*/
        .pipe(gulp.dest('blog/*.html'));
});