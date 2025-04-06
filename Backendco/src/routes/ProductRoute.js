const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const verifytoken = require("../middlewares/tokenAuth");
const {
  add,
  updateProduct,
  deleteProduct,
  getUserProducts,
  productData,
  productsData
} = require("../controllers/productController");

// Add a product
router.post("/add",  upload.array("images", 5), add);
// edit a product
router.put("/edit/:id", verifytoken, upload.array("images", 5), updateProduct);

// Delete a product (by ID and owner check)
router.delete("/delete/:id", verifytoken, deleteProduct);

// Get products by current user
router.get("/productsData", productsData);
router.get("/productsData/:id", productData);
router.get("/userProducts",verifytoken, getUserProducts);//need work on it might fix for future it should be dynamic


module.exports = router;
