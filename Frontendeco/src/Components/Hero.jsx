import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative h-screen flex items-center justify-center text-center bg-[#1e2d40] text-[#e8e4d9] pt-16"
    >
      {/* Decorative Image (Behind Text) */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img 
          src="https://cms.nationalmuseumsni.org/sites/default/files/styles/responsive/public/1096/618/1/2022-12/Renaissance%201095x616.jpg" 
          alt="Decorative Art" 
          className="w-[70%] md:w-[50%] opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Gilded Gallery</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-serif italic mb-8">
          Curators of Renaissance-inspired treasures for artisans and connoisseurs
        </p>

        {/* Buttons with Hover Effects */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 bg-[#a67c52] text-[#e8e4d9] rounded-md transition-all duration-300 font-serif text-lg"
          >
            Explore Collections
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 border-2 border-[#a67c52] text-[#e8e4d9] rounded-md transition-all duration-300 font-serif text-lg hover:bg-[#a67c52c0]"
          >
            Our Philosophy
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
