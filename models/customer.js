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

// add customer
module.exports.addCustomer = function(model, callback) {
    var customer = {
        first_name: model.first_name,
        last_name: model.last_name,
        company: model.company,
        email: model.email,
        phone: model.phone,
        address: {
            street: model.address.street,
            city: model.address.city,
            state: model.address.state,
            zip: model.address.zip
        }
    }
    Customer.create(customer, callback);
}

// update customer follow _id
module.exports.updateCustomer = function(id, model, options, callback) {
    const query = { _id: id };

    // khởi tạo lại obj customer
    const customer = {
        first_name: model.first_name,
        last_name: model.last_name,
        company: model.company,
        email: model.email,
        phone: model.phone,
        address: {
            street: model.address.street,
            city: model.address.city,
            state: model.address.state,
            zip: model.address.zip
        }
    };

    // .findOneAndUpdate is command of mongoose
    Customer.findOneAndUpdate(query, customer, options, callback);
}

// delete customer follow _id
module.exports.removeCustomer = function(id, callback) {
    // const query = { _id: id };
    // Customer.remove(query, callback);

    // có thể viết thẳng bằng cách này
    Customer.remove({ _id: id }, callback);
}