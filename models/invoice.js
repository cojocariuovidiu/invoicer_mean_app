// const mongoose = require('mongoose');

// const Schema = mongoose.Schema({
//     customer: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Customer'
//     },
//     service: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: String
//     },
//     due: {
//         type: String
//     },
//     status: {
//         type: String
//     },
//     created_at: {
//         type: Date,
//         Default: Date.now
//     }
// });

// const Invoice = module.exports = mongoose.model('Invoice', Schema);

// // method get all invoices
// module.exports.getInvoices = function(callback, limit) {
//     Invoice.find(callback)
//         .limit(limit)
//         .sort([
//             ['created_at', 'ascending']
//         ])
// }