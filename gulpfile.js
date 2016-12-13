const gulp = require('gulp');
var replace = require('gulp-replace');
var markdown = require('gulp-markdown');
var header = require('gulp-header');
var footer = require('gulp-footer');
var glob = require("glob");
var fs = require('fs');
const md = require('markdown');

var template = {
    header: '<!DOCTYPE html>\
            <html lang="en">\
            <head>\
                <meta charset="UTF-8">\
                <title></title>\
                <link href="../css/github-markdown.css" rel="stylesheet" />\
                <link href="../css/article.css" rel="stylesheet" />\
            </head>\
            <body class="markdown-body">',
    footer: '</body></html>'
};

gulp.task('blog', function () {
    gulp.src('md/*.md')
        .pipe(markdown())
        .pipe(header(template.header))
        .pipe(footer(template.footer))
        .pipe(gulp.dest('blog'));
});

gulp.task('uplist', function () {
    var arr = new Array();
    var tables = '';
    glob('md/*.md', function (err, files) {
        for (var i = 0; i < files.length; i++) {
            var file = fs.readFileSync(files[i]);
            let mdString = md.markdown.toHTMLTree(file.toString(), 'Maruku');
            arr.push({
                time: mdString[2][1][1],
                title: mdString[1][1],
                href: files[i].replace('md/', 'blog/').replace('.md', '.html')
            });
        }
        arr.sort(function (a, b) {
            return a.time < b.time
        });
        for (var j = 0; j < arr.length; j++) {
            tables += '<tr><td><a href="' + arr[j]['href'] + '">' + arr[j]['title'] + '</a></td><td>' + arr[j]['time'] + '</td></tr>';
        }
        gulp.src('diary.html')
            .pipe(replace(/<table class="list">([\s\S]*)<\/table>/, '<table class="list">' + tables + '</table>'))
            .pipe(gulp.dest('.'));
    });
});

gulp.task('watch', function () {
    gulp.watch('md/*.md', ['blog', uplist]);
});

gulp.task('default', ['blog', 'uplist']);