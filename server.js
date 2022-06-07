const express = require('express');
const fs = require('fs');
var app = express();
app.use(express.urlencoded());
app.use(express.json());
app.post('/', function(req, res) {
   console.log(req.body);
   //console.log(req.body.bodyParser);
   //console.log(req.body.sound);
   //console.log(req.body.count);
    console.log(JSON.parse(req.body.person));
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