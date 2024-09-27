const {getCustomers,getCustomerbyId} = require('../conrollers/customerController');

const router = require('express').Router();

// get the user by category
router.get('/',getCustomers); 

router.get('/:id',getCustomerbyId );

module.exports = router;