const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

// client folder 
app.use(express.static(__dirname + '/client'));

// body parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
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