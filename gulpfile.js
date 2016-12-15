"use strict";
const gulp = require('gulp');
const replace = require('gulp-replace');
const markdown = require('gulp-markdown');
const header = require('gulp-header');
const footer = require('gulp-footer');
const glob = require("glob");
const fs = require('fs');
const md = require('markdown');

let articleTemplate = {
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

gulp.task('blog', function () {        // md ==> html
    gulp.src('md/*.md')
        .pipe(markdown())
        .pipe(header(articleTemplate.header))
        .pipe(footer(articleTemplate.footer))
        .pipe(gulp.dest('blog'));
});

gulp.task('list', function () {        // update diary.html
    let arr = new Array();
    let table = '';
    glob('md/*.md', function (err, files) {
        for (let i = 0; i < files.length; i++) {
            let file = fs.readFileSync(files[i]);
            let mdString = md.markdown.toHTMLTree(file.toString(), 'Maruku');
            arr.push({
                time: mdString[2][1][1],
                title: mdString[1][1],
                href: files[i].replace('md/', 'blog/').replace('.md', '.html')
            });
        }
        arr.sort(function (a, b) {     //sort by time
            return a.time < b.time
        });
        for (let j = 0; j < arr.length; j++) {
            table += '<tr><td><a href="' + arr[j]['href'] + '">' + arr[j]['title'] + '</a></td><td>' + arr[j]['time'] + '</td></tr>';
        }
        gulp.src('diary.html')
            .pipe(replace(/<table class="list">([\s\S]*)<\/table>/, '<table class="list">' + table + '</table>'))   //update list
            .pipe(gulp.dest('.'));     //release origin dir
    });
});

gulp.task('watch', function () {       // develop
    gulp.watch('md/*.md', ['blog', 'list']);
});

gulp.task('default', ['blog', 'list']);