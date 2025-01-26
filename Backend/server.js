const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products.js');
const Products = require('./models/Products');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

// Database Connection
mongoose.connect('mongodb://localhost:27017/productsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

// Routes
app.get('/',async(req,res)=>{
    try {
        const products = await Products.find();
        res.json({products,
            msg:"Passed"
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})
// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));