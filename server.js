var bodyParser = require('body-parser');
var express = require('express');
const fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function(req, res) {
   console.log(req.body);
   console.log(req.body.sound);
   console.log(req.body.count);
    //console.log('post');
   res.send('Got a POST request');
   // res.send(req.body);
   // res.send(count.txt)
   /*fs.writeFile('count.txt', req.body.count, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    */
    });
    app.listen(3000, function(){
        console.log("server is running on port 3000");
      })