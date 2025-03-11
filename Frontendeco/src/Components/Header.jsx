import { motion } from "framer-motion";
import { ShoppingBag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="fixed w-full z-50 bg-[#1e2d40] text-[#e8e4d9] shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Custom SVG Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/Home">
            <svg className="h-15 w-20 text-[#a67c52]" viewBox="0 0 100 100" fill="currentColor">
              <text x="10" y="70" fontSize="60" fontFamily="serif">G</text>
            </svg>
          </Link>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-8 font-serif">
          <Link to="/Home" className="hover:text-[#d9b48f] transition-colors duration-300">Home</Link>
          <a href="#" className="hover:text-[#d9b48f] transition-colors duration-300">Collections</a>
          <a href="#" className="hover:text-[#d9b48f] transition-colors duration-300">Atelier</a>
          <a href="#" className="hover:text-[#d9b48f] transition-colors duration-300">About</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-[#d9b48f] transition-colors duration-300">
            <Search />
          </button>
          <Link to="/cart" className="hover:text-[#d9b48f] transition-colors duration-300">
            <ShoppingBag />
          </Link>
          <button className="md:hidden hover:text-[#d9b48f] transition-colors duration-300">
            ☰
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;