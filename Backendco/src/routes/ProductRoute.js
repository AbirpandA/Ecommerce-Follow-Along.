const express = require("express");
const Product = require("../models/ProductsSchema"); 

const router = express.Router();


router.post("/addproduct", async (req, res) => {
    try {
       
        const { name, category, description, price, stock } = req.body;

        if (!name || !category || !description || price == null || stock == null) {
            return res.status(400).json({ message: "Missing required fields" });
        }

      
        const newProduct = new Product(req.body);

        
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
});

module.exports = router;
