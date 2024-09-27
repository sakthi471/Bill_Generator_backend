const Customer = require("../models/customer");
const Order = require("../models/order");





module.exports.createOrder = async (req, res) => {
    try {
        const { phoneno, name, totalAmount, amountReceived, balanceAmount, cart, time,date } = req.body;
    
        let customer = await Customer.findOne({ phoneno });
    
        if (!customer) {
          customer = new Customer({ name, phoneno });
          await customer.save();
        }
    
       
        const newOrder = new Order({
          totalAmount,
          amountReceived,
          balanceAmount,
          customerID: customer.phoneno,  
          cart,
          time,
          date
        });
    
        
        const savedOrder = await newOrder.save();
    
        res.status(201).json({
          message: 'Order created successfully',
          order: savedOrder
        });
      } catch (error) {
        res.status(400).json({ error: 'Error creating order', details: error.message });
      }
  
  }