
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Handcrafted Violin",
    price: 895,
    description: "Italian craftsmanship with aged maple wood",
    image: "/api/placeholder/300/400",
    category: "Instruments"
  },
  {
    id: 2,
    name: "Renaissance Paintbrush Set",
    price: 125,
    description: "Authentic sable brushes with walnut handles",
    image: "/api/placeholder/300/400",
    category: "Painting"
  },
  {
    id: 3,
    name: "Italian Leather Journal",
    price: 79,
    description: "Hand-bound with Florentine marbled endpapers",
    image: "/api/placeholder/300/400",
    category: "Writing"
  },
  {
    id: 4,
    name: "Venetian Chess Set",
    price: 349,
    description: "Hand-carved pieces inspired by 16th century designs",
    image: "/api/placeholder/300/400",
    category: "Games"
  },
  
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.6 
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { delay: 0.8, duration: 0.5 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.98 }
};

const FeaturedProducts = () => {
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
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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