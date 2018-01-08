const express = require('express');
const router = express.Router(); // Router mà thiếu dấu () cũng sẽ bị báo lôi 404

const invoiceControllers = require('../controllers/invoiceControllers');

router.get('/', invoiceControllers.getInvoices);

router.get('/:id', invoiceControllers.getInvoice);

router.get('/customer/:customer_id', invoiceControllers.getInvoicesByCustomerId);

router.post('/add', invoiceControllers.addInvoice);

router.put('/update/:id', invoiceControllers.updateInvoice);

router.delete('/delete/:id', invoiceControllers.removeInvoice);

module.exports = router;