const express = require('express');
const router = express.Router();

const customerControllers = require('../controllers/customerControllers');



router.get('/', customerControllers.getCustomers);

router.get('/:id', customerControllers.getCustomer);

router.post('/add', customerControllers.addCustomer_post);

router.put('/update/:id', customerControllers.updateCustomer_put);

router.delete('/delete/:id', customerControllers.removeCustomer_delete);


module.exports = router;