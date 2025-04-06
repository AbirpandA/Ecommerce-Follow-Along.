import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = "http://localhost:8000";

const ProductInfoPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/products/productsData/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    alert(`Added ${quantity} of "${product.name}" to cart.`);
  };

  if (!product) return <div className="p-8 text-center">Loading product...</div>;

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="space-y-6 bg-white/90 p-8 rounded-2xl shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif font-semibold text-gray-800">{product.name}</h1>

          <p className="text-2xl text-[#a67c52] font-medium">${product.price}</p>

          <div className="text-gray-700 space-y-1 leading-relaxed text-base">
            <p>{product.description}</p>
            <p><span className="font-semibold">Artist:</span> {product.artistName}</p>
            <p><span className="font-semibold">Art Style:</span> {product.artStyle}</p>
            <p><span className="font-semibold">Era:</span> {product.era}</p>
            <p><span className="font-semibold">Available Stock:</span> {product.stock}</p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <label htmlFor="quantity" className="text-md font-medium text-gray-700">Qty:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
            />
          </div>

          <motion.button
            onClick={handleAddToCart}
            className="w-full mt-6 py-3 bg-[#a67c52] hover:bg-[#8e6440] text-white font-medium text-lg rounded-xl shadow-md transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductInfoPage;
