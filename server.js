var bodyParser = require('body-parser');
var express = require('express');
const fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function(req, res) {
   //console.log(req.body);
   //console.log(req.body.bodyParser);
   //console.log(req.body.sound);
   //console.log(req.body.count);
   if (req.body = '{ Riko: \'\'}'){
        console.log("Riko");
   }
    else if (req.body = '{ Chika: \'\'}'){
        console.log("Chika");
    }
    else if (req.body = '{ You: \'\'}'){
        console.log("You");
    }
    else if (req.body = '{ Dia: \'\'}'){
        console.log("Dia");
    }
    else if (req.body = '{ Kanan: \'\'}'){
        console.log("Kanan");
    }
    else if (req.body = '{ Mari: \'\'}'){
        console.log("Mari");
    }
    else if (req.body = '{ Hanamaru: \'\'}'){
        console.log("Hanamaru");
    }
    else if (req.body = '{ Ruby: \'\'}'){
        console.log("Ruby");
    }
    else if (req.body = '{ Yoshiko: \'\'}'){
        console.log("Yoshiko");
    }
    else {
        console.log("error");
    }
    
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