const mongoose = require('mongoose');



const DB_STRING=""

const connectDB = async () => {
    try {
        await mongoose.connect(DB_STRING);
        
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;