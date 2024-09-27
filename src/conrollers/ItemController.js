const Item = require("../models/item");

module.exports.createItem = async (req, res) => {
  try {
    const { name, mrp,rate } = req.body;

    const newItem = new Item({ name, mrp,rate });

    const savedItem = await newItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    console.log(error);
    
    res.status(400).json({ error: 'Error creating item' });
  }
}


module.exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }

}



module.exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the item' });
  } 
}



module.exports.updateItem = async (req, res) => {
  try {
    const { name, mrp,rate } = req.body;
    
    // Find and update the item
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, mrp ,rate},  // Fields to update
      { new: true, runValidators: true }  // Return the updated document and validate it
    );
    
    if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
    
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Error updating item' });
  }

}


module.exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    
    if (!deletedItem) return res.status(404).json({ error: 'Item not found' });
    
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the item' });
  }

}


