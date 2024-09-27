const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  
  },
  mrp: {
    type: Number,
    required: true,  
    min: 0
  },
  rate: {
    type: Number,
    required: true,  
    min: 0
  },

}, {timestamps: true  });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
