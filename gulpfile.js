
const gulp = require('gulp');
var replace = require('gulp-replace');
var markdown = require('gulp-markdown');
var header = require('gulp-header');
var footer = require('gulp-footer');
var glob = require("glob");
var fs = require('fs');
const md = require('markdown');

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

gulp.task('uplist',function(){
    var tables = '';
    glob('md/*.md', function (err, files) {
        for(var i=0;i<files.length;i++){
            var file = fs.readFileSync(files[i]);

            let mdString = md.markdown.toHTMLTree(file.toString(),'Maruku');
            tables +='<tr><td>'+ mdString[1][1] + '</td><td>'+ mdString[2][1] +'</td></tr>';
        };
        console.log(tables);
        gulp.src('diary.html')
         .pipe(replace(/<table>[\s|\S]*<\/table>/,'<table>' + tables + '</table>'))
         .pipe(gulp.dest('.'));
    });

});

gulp.task('watch',function(){
    gulp.watch('md/*.md',['blog']);
});

gulp.task('default', ['blog']);