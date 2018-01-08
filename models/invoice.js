const mongoose = require('mongoose');
const Customer = require('./customer');

const Schema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    service: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    due: {
        type: String
    },
    status: {
        type: String
    },
    created_at: {
        type: Date,
        Default: Date.now
    }
});

const Invoice = module.exports = mongoose.model('Invoice', Schema);

// method get all invoices
module.exports.getInvoices = function(callback, limit) {
    Invoice.find(callback)
        .limit(limit)
        .sort([
            ['created_at', 'ascending']
        ]);
}

module.exports.getInvoice = function(req, res) {
    Invoice.findById(req.params.id, callback, limit)
        .limit(limit)
        .sort([
            ['created_at', 'ascending']
        ]);
}

// get invoices follow customer
module.exports.getInvoicesByCustomerId = function(customerId, callback, limit) {
    // Invoice.find(customerId, callback, limit); // sai, wrong
    // Invoice.find({ customer: customerId }, callback)
    //     .limit(limit)
    //     .sort([
    //         ['created_at', 'ascending']
    //     ]);

    // refer http://mongoosejs.com/docs/queries.html
    Invoice.find({
            'customer': customerId
        })
        .limit(100)
        .sort({ created_at: -1 })
        .exec(callback);
}

// add invoice
module.exports.addInvoice = function(model, callback) {
    const invoice = {
        customer: model.customer,
        service: model.service,
        price: model.price,
        due: model.due,
        status: model.status
    }

    Invoice.create(model, callback);
}

// update invoice
module.exports.updateInvoice = function(id, params, options, callback) {
    const query = { _id: id };
    const model = {
        service: params.service,
        price: params.price,
        due: params.due,
        status: params.status
    }
    Invoice.findOneAndUpdate(query, model, options, callback);
}

// delete invoice
module.exports.removeInvoice = function(id, callback) {
    Invoice.remove({
        _id: id
    }, callback);
}