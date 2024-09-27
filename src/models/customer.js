const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  phoneno: {
    type: String,
    required: true, 
    match: [/^\d{10}$/, 'Please fill a valid 10-digit phone number']
  }
},{timestamps: true  });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
