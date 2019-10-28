const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const helper = require('./scripts/helper.js')
const app = express()

// Insert middleware
app.use(bodyParser.json())
app.use(cors())

// Set root directory for Express
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'styles')));

// Serve up example page
app.use('/example', function(req, res, next){
    helper.log("Serving 'example.html'", '/example/')
    res.sendFile(path.join(__dirname,'example_component', 'example.html'));
});

// Set server to listen
app.listen(8001, function(){
    helper.log("Listening On 8001", "server")
})
