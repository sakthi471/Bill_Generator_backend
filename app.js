const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const itemRoutes = require('./src/routes/itemRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const customerRoutes = require('./src/routes/customerRoutes');
const connectDB = require('./src/utils/dbConnect');

app.use(express.json());

app.use(cors({
    origin: "*"
}));




app.use('/items', itemRoutes)
app.use('/orders',orderRoutes)
app.use('/customers',customerRoutes)



connectDB().then(result => {
    console.log("DB Connected");
    app.listen(PORT, async() => {
        console.log(`Server is running on port ${PORT}`);
    });  
}).catch(err => {
    console.log(" Database  Error");
})