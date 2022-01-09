const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const productRoutes = require('./routes/product');



const app = express();

app.use(express.json({ limit:'50mb' }));
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGOOSE_URL;

mongoose.connect(URL);
// .then( () => console.log("Mongodb Connection success!"))
// .catch((error) => console.log(`Not connected well ${error}`));


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Mongodb Connection success!");
});
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
  });

app.use('/product', productRoutes);
