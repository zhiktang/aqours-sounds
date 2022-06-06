var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/server.js', function(req, res) {
    console.log(req.body);
    console.log('post');
    res.send('Got a POST request');
    res.send(req.body);
    res.send(count.txt)
    });