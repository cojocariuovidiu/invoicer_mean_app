const express = require('express');
const router = express.Router(); // Router mà thiếu dấu () cũng sẽ bị báo lôi 404

const invoiceControllers = require('../controllers/invoiceControllers');

router.get('/', invoiceControllers.getAllInvoices);

module.exports = router;