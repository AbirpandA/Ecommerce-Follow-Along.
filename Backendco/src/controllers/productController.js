const Product = require('../models/ProductsSchema');

const add = async (req, res) => {
    try {
      const imagePaths = req.files.map(file => file.path);
  
      const newProduct = new Product({
        ...req.body,
        seller: req.user?req.user._id:null,
        images: imagePaths
      });
  
      await newProduct.save();
      res.status(201).json({ product: newProduct });
    } catch (error) {
      res.status(500).json({ message: "Error while creating the product", error: error.message });
    }
  };
  
  const updateProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      if (product.seller.toString() !== req.user._id) {
        return res.status(403).json({ message: "Unauthorized to edit this product" });
      }
  
      const updatedFields = {
        ...req.body
      };
  
      if (req.files && req.files.length > 0) {
        updatedFields.images = req.files.map(file => file.path);
      }
  
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
      res.status(200).json({ product: updatedProduct });
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error: error.message });
    }
  };
  

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        if (product.seller.toString() !== req.user._id) {
            return res.status(403).json({ message: "Unauthorized to delete this product" });
        }

        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};

const getUserProducts = async (req, res) => {
    try {
        const products = await Product.find({ seller: req.user._id });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user's products", error: error.message });
    }
};

const productData = async(req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json({products})
    }catch(err){
        res.status(500).json({ message: "Error fetching user's products", error: error.message });
    }
}

module.exports = {
    add,
    updateProduct,
    deleteProduct,
    getUserProducts,
    productData
};
