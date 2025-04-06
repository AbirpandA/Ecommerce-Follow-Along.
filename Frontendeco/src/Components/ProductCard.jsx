import React from "react";
import { motion } from "framer-motion";


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: { 
    y: -10,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="product-card bg-[#f5f1e6] rounded-md overflow-hidden shadow-md"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={product.images?.[0]} 
          alt={product.name} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d40]/70 to-transparent flex items-end">
          <motion.span 
            className="m-3 px-3 py-1 bg-secondary text-primary text-sm rounded"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {product.category}
          </motion.span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl mb-2">{product.name}</h3>
        <p className="text-[#5b4636] mb-3 font-serif italic">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${product.price}</span>
          <motion.button 
            className="px-3 py-1 bg-primary text-primary rounded hover:bg-[#324c6e] hover:text-white transition-colors duration-300 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;