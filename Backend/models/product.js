const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema({
    name : String,
    price : Number,
    description : String,
    suplier : String,
    country: String,
    selectedFile : String
});

const productModle = mongoose.model('products', productSchema);

module.exports = productModle;