const express = require('express');
const cors = require('cors')
const port = 3000;

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())

app.get("/", function(req, res){
    res.render('index', {});
})

let server = app.listen(port, () => {
    console.log(`Server started, running on port ${port}`);
});
