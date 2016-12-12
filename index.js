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
    console.log(mdString);
});

