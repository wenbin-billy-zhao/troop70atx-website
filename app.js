var express = require('express');
var cors = require('cors')

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())

app.get("/", function(req, res){
    res.render('index', {});
})

app.listen(process.env.PORT)