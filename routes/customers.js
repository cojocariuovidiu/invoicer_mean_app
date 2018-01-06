const express = require('express');
const router = express.Router();

const customerControllers = require('../controllers/customerControllers');



router.get('/', customerControllers.getCustomers);

router.get('/:id', customerControllers.getCustomer);

module.exports = router;