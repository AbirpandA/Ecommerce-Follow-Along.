import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";  
import axios from "axios";

const API_URL = "http://localhost:8000";

const FeaturedProducts = () => {
  const [featuredProducts, setfeaturedProducts] = useState([]);  

  // Function to fetch data from backend using axios
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products/productsData`);
      setfeaturedProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <motion.section
      className="py-20 bg-[#e8e4d9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="mb-12 text-center" variants={titleVariants}>
          <motion.h2 className="text-3xl md:text-4xl font-serif mb-3">
            Treasures of the Atelier
          </motion.h2>
          <motion.p className="text-[#5b4636] font-serif italic max-w-2xl mx-auto">
            Discover our finest curated artifacts, each echoing the spirit of Renaissance craftsmanship
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts && featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No featured products available at the moment.</p>
          )}
        </div>

        <div className="text-center mt-12">
          <motion.button
            className="px-6 py-2 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary transition-colors duration-300 font-serif"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View All Treasures
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;
