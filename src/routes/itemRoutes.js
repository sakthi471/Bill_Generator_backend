const {createItem,getAllItems,getItemById,deleteItem,updateItem} = require('../conrollers/ItemController');

const router = require('express').Router();

// get the user by category
router.post('/create',createItem ); 

router.get('/',getAllItems );

router.get('/:id',getItemById );

router.put('/:id',updateItem );

router.delete('/:id',deleteItem );

module.exports = router;