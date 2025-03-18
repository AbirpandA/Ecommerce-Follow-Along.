const express = require("express");
const Product = require("../models/ProductsSchema");
const upload = require("../middlewares/multer"); 

const router = express.Router();

router.post("/addproduct", upload.array("images", 5), async (req, res) => {
  try {
    const { name, price, description, stock, category } = req.body;

    if (!name || !price || !description || !stock || !category) {
      return res.status(400).json({ message: "Please fill all the fields." });
    }

    // Get image paths from multer
    const imagePaths = req.files.map(file => `${req.protocol}://${req.get('host')}/${file.path}`);
    console.log(imagePaths)


    const product = new Product({ ...req.body, images: imagePaths });
    const savedProduct = await product.save();

    res.status(200).json({ message: "Product added successfully!", product: savedProduct });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add product.", error: err.message });
  }
});

router.get('/productdata', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve products.", error: err.message });
  }
});


module.exports = router;

