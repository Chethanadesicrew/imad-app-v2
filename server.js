var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' : {
title: 'Article One / chethana',
heading: 'Article One',
date: 'February 16th, 2017',
content:     
                <p>
                    Spear fisherman Danny Henricks is fortunate enough to have survived the type of underwater experience that proves just how dangerous sea creatures can be -- and he even caught it all on video.
                </p> '
},

 'article-two' : {
     title: 'Article Two / chethana',
heading: 'Article Two',
date: 'February 16th, 2017',
content:     
                <p>
                    Spear fisherman Danny Henricks is fortunate enough to have survived the type of underwater experience that proves just how dangerous sea creatures can be -- and he even caught it all on video.
                </p> '
 },
 
 'article-three' : {
     title: 'Article Three / chethana',
heading: 'Article Three',
date: 'February 20th, 2017',
content:     
                <p>
                    Spear fisherman Danny Henricks is fortunate enough to have survived the type of underwater experience that proves just how dangerous sea creatures can be -- and he even caught it all on video.
                    Henricks, 35, was fishing off the coast of Australia when a bull shark charged at him at full speed, only to impale himself on Danny's spear gun.
                    The hair-raising clip has been video more than three million times (and counting) since Henricks uploaded it last month.
                </p> '
 };
 

function createtemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmltemplate = 
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        <body>
            <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
                </div>
            </div>
        </body>
    </head>
</html>
   ;
   return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    //articlename == article-one
    //articles[articlename] == {} content object for the article one
    var articlename = req.params.articlename;
   res.send(createTemplate(articles[articlename]));
});

    app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
