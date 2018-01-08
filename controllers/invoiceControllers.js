const Invoice = require('../models/invoice');

// get /api/invoices
exports.getInvoices = function(req, res) {
    // res.send('invoices');
    Invoice.getInvoices(function(err, results) {
        if (err) {
            console.error(err);
            res.send(err);
        }
        res.json(results);
    }, 1000);
}

// get detail invoice follow id
exports.getInvoice = function(req, res) {
    const query = { _id: req.params.id };
    Invoice.findById(query, function(err, results) {
        if (err) {
            throw err;
            res.send(err);
        }
        res.json(results);
    }, 100);
}

// get invoice follow customer id
exports.getInvoicesByCustomerId = function(req, res) {
    const customer_id = req.params.customer_id;
    console.log(customer_id);
    Invoice.getInvoicesByCustomerId(customer_id, function(err, results) {
        if (err) {
            console.error(err);
            res.send(err);
        }
        res.json(results);
    }, 1000);
}

exports.addInvoice = function(req, res) {
    Invoice.addInvoice(req.body, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(result);
    });
}

exports.updateInvoice = function(req, res) {
    Invoice.updateInvoice(req.params.id, req.body, {}, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(result);
    })
}

exports.removeInvoice = function(req, res) {
    Invoice.removeInvoice(req.params.id, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(result);
    });
}