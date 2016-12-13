/**
 * Created by 31491 on 2016/12/11.
 */
const path = require('path');
const fs = require('fs');
const md = require('markdown');



fs.readFile('md/mylife.md', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let mdString = md.markdown.toHTML(data.toString(),'Maruku');
    let html = template(mdString);
    console.log(html);
});


function template(html){
    return '<!DOCTYPE html>\
            <html lang="en">\
            <head>\
                <meta charset="UTF-8">\
                <title>ShangXinbo——A simple web front engineer</title>\
                <meta name="viewport" content="width=device-width, initial-scale=1">\
                <link href="css/pure-min.css" rel="stylesheet" />\
                <link href="css/grids-responsive-min.css" rel="stylesheet" />\
                <link href="css/index.css" rel="stylesheet" />\
            </head>\
            <body>' + html+ '</body></html>';
}
