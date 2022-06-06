var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.post('/', function(req, res) {
    console.log(req.body);
    res.send('Got a POST request');
    res.send(req.body);
    res.send(count.txt)
    });