const Customer = require("../models/customer");


module.exports.getCustomers = async (req, res) => { 
    try {
        const customers = await Customer.find();  // Retrieve all customers from the database
        res.status(200).json(customers);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching customers' });
      }
}   



module.exports.getCustomerbyId = async (req, res) => {
    try {
        const customer = await Customer.find({phoneno:req.params.id});  
        if (!customer) {
          return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json(customer);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching the customer' });
      }
}