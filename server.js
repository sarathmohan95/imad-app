var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pageone={
    title:'PageOne | Sarath',
    heading:'Page One',
    content:`this is my new content. this is my new content. this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.this is my new content.
        `
    
};
function newfun(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
var htmlpage=`
<html>
<head>
    <title>
       ${title}
    </title>
    
    <link href="/ui/style.css" rel="stylesheet" /></head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <div>
            <h3>${heading}</h3>
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>

</html>

    
`;
return htmlpage;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/pageone', function (req,res){
    res.send(newfun(pageone));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
