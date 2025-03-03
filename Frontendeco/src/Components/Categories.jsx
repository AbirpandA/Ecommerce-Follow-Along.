import React from "react";
import { motion } from "framer-motion";

const categories = [
  { id: 1, name: "Instruments", image: "/api/placeholder/500/500" },
  { id: 2, name: "Painting", image: "/api/placeholder/500/500" },
  { id: 3, name: "Writing", image: "/api/placeholder/500/500" },
  { id: 4, name: "Games", image: "/api/placeholder/500/500" },
  { id: 5, name: "Sculpture", image: "/api/placeholder/500/500" },
  { id: 6, name: "Literature", image: "/api/placeholder/500/500" }
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      duration: 0.6 
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0.8 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const Categories = () => {
  return (
    <motion.section 
      className="py-20 bg-[#e8e4d9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center" 
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Explore Our Collections</h2>
          <p className="text-[#5b4636] font-serif italic max-w-2xl mx-auto">
            Journey through our carefully curated categories, each celebrating a different facet of artistic expression
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              className="category-card relative h-64 rounded-md overflow-hidden shadow-lg group"
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover"
                variants={imageVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d40]/80 to-transparent flex items-end justify-center p-6">
                <motion.h3 
                  className="font-serif text-2xl text-primary"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  {category.name}
                </motion.h3>
              </div>
              <motion.div 
                className="absolute inset-0 bg-[#1e2d40]/20 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button 
                  className="px-5 py-2 bg-[#e8e4d9] text-[#1e2d40] rounded-md transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-serif"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.1,
                  }}
                >
                  Explore {category.name}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Categories;