
const gulp = require('gulp');
var markdown = require('gulp-markdown');
var header = require('gulp-header');
var footer = require('gulp-footer');

var template ={
    header:'<!DOCTYPE html>\
            <html lang="en">\
            <head>\
                <meta charset="UTF-8">\
                <title></title>\
                <link href="../css/github-markdown.css" rel="stylesheet" />\
                <link href="../css/article.css" rel="stylesheet" />\
            </head>\
            <body class="markdown-body">',
    footer:'</body></html>'
};


gulp.task('blog',function(){
    gulp.src('md/*.md')
        .pipe(markdown())
        .pipe(header(template.header))
        .pipe(footer(template.footer))
        .pipe(gulp.dest('blog'));
});

gulp.task('watch',function(){
    gulp.watch('md/*.md',['blog']);
});

gulp.task('default', ['blog']);