const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const helper = require('./scripts/utilities/helper.js')
const app = express()

// Insert middleware
app.use(bodyParser.json())
app.use(cors())

// Set root directory for Express
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'scripts', 'angularjs')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'html', 'examples')));

app.get('/', function(req,res,next){
    helper.log("Redirecting to /example/", '/');
    res.redirect('/example');
})

// Serve up example page
app.use('/example', function(req, res, next){
    helper.log("Serving 'example.html'", '/example/')
    res.sendFile(path.join(__dirname,'html', 'main.html'));
});

// Set server to listen
app.listen(8001, function(){
    helper.log("Listening On 8001", "server")
})
