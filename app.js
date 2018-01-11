const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const datetime = new Date();

// mongoose connect
mongoose.connect('mongodb://localhost/invoicer');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error: '));
db.on('open', () => {
    console.log('connection db success at ' + datetime.toLocaleString());
});

const app = express();

const port = 3000;

// Enable CORS , refer: https://enable-cors.org/server_expressjs.html
// error : Method PUT is not allowed by Access-Control-Allow-Methods in preflight response. on client
// so add put for server
app.use(function(req, res, next) {
    console.log('Time:', Date.now());
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('Request Type:', req.method);
    next();
});

// app.use(function(req, res, next) {
//     // console.log('Time:', Date.now());
//     // console.log('Request Type:', req.method);
//     next();
// });


// client folder 
app.use(express.static(__dirname + '/client'));

// body parser
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('/please use /api/customers or /api/invoices')
});

// route files
const customers = require('./routes/customers');
const invoices = require('./routes/invoices');

// Paths
app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});