var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

///express instance
const app = express()
///cors
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
const port=8081
app.listen(port, function () {
    console.log(`Example app listening on port${port}!`)
})

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

let formInput=[]
app.post('/api', async function(req, res) {
    formInput = req.body.url;
    console.log("You entered:",formInput);
  
})