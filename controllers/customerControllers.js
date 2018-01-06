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