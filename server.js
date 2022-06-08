var bodyParser = require('body-parser');
var express = require('express');
const fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function(req, res) {
   //console.log(req.body);
   //console.log(req.body.bodyParser);
   //console.log(req.body.sound);
   //console.log(req.body.count);
    console.log(req.body.person);
    var person = req.body.person;
    //console.log('post');
   //res.send('Got a POST request');
   // res.send(req.body);
   // res.send(count.txt)
   /*fs.writeFile('count.txt', req.body.count, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    */
   var output = '';
    fs.readFile('count.txt', 'utf-8' , (err, data) => {
        //console.log("reading file");
        if(err) {
            return console.log(err);
        }
        //console.log("data is" + data);
        var lines = data.split('\n');
        for (var i = 0; i < lines.length; i++) {
            //console.log("Line " + i + " is: " + lines[i]);
            if (lines[i].startsWith(person)) {
                var data = lines[i].split(' ');
                data[1] = parseInt(data[1]) + 1;
                lines[i] = data.join(' ');
                //console.log("modified line is: " + lines[i]);
            }
            output += lines[i];
            if(i < lines.length - 1) {
                output += '\n';
            }

        }  
       // console.log("output is: " + output);
    fs.writeFile('count.txt', output, function(err) {
        if(err) {
            return console.log(err);
        }
        //console.log("The file was saved!");
    });
    });
    
});
    app.listen(3000, function(){
        console.log("server is running on port 3000");
      })