const express = require('express');
const router = express.Router();
const productModle = require('../models/product');

router.post('/', async (req, res) => {
    const { name, price, description, suplier, selectedFile } = req.body;
    const newProduct = new productModle({
      name, 
      price, 
      description, 
      suplier,
      selectedFile
    });
  
    try {
      await newProduct.save();
      res.status(201).json(newProduct);
  
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
});

router.get('/store', async (req, res) => {
  try {
    const products = await productModle.find();
            
    res.status(200).json(products);
    // console.log("has send");
} catch (error) {
    res.status(404).json({ message: error.message });
}
})


module.exports = router;

