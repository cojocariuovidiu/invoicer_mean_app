const Customer = require('../models/customer');

// get all customers
exports.getCustomers = function(req, res) {
    // res.send('customers');
    Customer.getCustomers((err, customers) => {
        if (err) {
            console.log(err);
            res.send(err);
        }

        // chú ý, với api thì send.json()
        res.json(customers);
    });
}

exports.getCustomer = function(req, res) {
    Customer.getCustomerById(req.params.id, function(err, customer) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    })
}

// result in callback is customer obj
exports.addCustomer_post = function(req, res) {
    // console.log(req.body);
    // res.send('ok');
    var customer = req.body;
    Customer.addCustomer(customer, function(err, result) {
        if (err) {
            console.error(err);
            res.send(err);
        }
        res.json(result);
    });
}

// update
exports.updateCustomer_put = function(req, res) {
    const id = req.params.id;
    const customer = req.body;
    Customer.updateCustomer(id, customer, {}, function(err, result) {
        if (err) {
            console.error(err);
            res.send(err);
        }
        // result này là thông tin customer cũ
        res.send('ket qua' + result);
    });
}

// delete
exports.removeCustomer_delete = function(req, res) {
    const query = req.params.id;

    Customer.removeCustomer(query, function(err, result) {
        if (err) {
            console.error(err);
            res.send(err);
        }
        res.send(result);
    })
}