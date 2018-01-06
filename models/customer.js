const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    create_at: {
        type: Date,
        Default: Date.now
    }
});

const Customer = module.exports = mongoose.model('Customer', Schema);

// get all customers
module.exports.getCustomers = function(callback, limit) {
    Customer.find(callback).limit(limit).sort([
        ['first_name', 'ascending']
    ]);
}

// get single customer
module.exports.getCustomerById = (id, callback) => {
    Customer.findById(id, callback);
}

// // add customer
// module.exports.addCustomer = function(customer, callback) {
//     Customer.create(add, callback);
// }