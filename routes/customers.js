const express = require('express');
const router = express.Router();

const customerControllers = require('../controllers/customerControllers');

router.get('/', customerControllers.getAllCustomers);

module.exports = router;