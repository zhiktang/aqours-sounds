var bodyParser = require('body-parser');
var express = require('express');
const fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/server.js', function(req, res) {
   // console.log(req.body);
    //console.log('post');
   res.send('Got a POST request');
   // res.send(req.body);
   // res.send(count.txt)
   fs.writeFile('test.txt', req.body.person, function(err) {
       if(err) {
           return console.log(err);
       }
       console.log("The file was saved!");
   });
    });