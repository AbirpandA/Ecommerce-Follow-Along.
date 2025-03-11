import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, X, Plus, Minus, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  // State for cart items (normally would come from context or redux)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Handcrafted Violin",
      price: 895,
      description: "Italian craftsmanship with aged maple wood",
      image: "/api/placeholder/300/400",
      category: "Instruments",
      quantity: 1
    },
    {
      id: 3,
      name: "Italian Leather Journal",
      price: 79,
      description: "Hand-bound with Florentine marbled endpapers",
      image: "/api/placeholder/300/400",
      category: "Writing",
      quantity: 2
    }
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [removingId, setRemovingId] = useState(null);

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  // Handle quantity change
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal with confirmation
  const initiateRemove = (id) => {
    setRemovingId(id);
    setShowConfirmation(true);
  };

  const confirmRemove = () => {
    setCartItems(cartItems.filter(item => item.id !== removingId));
    setShowConfirmation(false);
  };

  const cancelRemove = () => {
    setShowConfirmation(false);
    setRemovingId(null);
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.4 }
    }
  };

  const summaryVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#e8e4d9]">
      <Header />
      
      <motion.main 
        className="flex-grow pt-24 pb-16 px-4 md:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <div className="container mx-auto">
          <motion.h1 
            className="text-3xl md:text-4xl font-serif mb-8 text-[#1e2d40]"
            variants={itemVariants}
          >
            Your Collection Cart
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <motion.div 
              className="lg:w-2/3"
              variants={itemVariants}
            >
              {cartItems.length === 0 ? (
                <motion.div 
                  className="bg-white rounded-lg shadow-md p-8 text-center"
                  variants={itemVariants}
                >
                  <p className="text-xl font-serif text-[#1e2d40] mb-6">Your cart is empty</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-[#a67c52] text-[#e8e4d9] rounded-md font-serif inline-flex items-center"
                  >
                    <ArrowLeft className="mr-2" size={18} />
                    Continue Exploring
                  </motion.button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        variants={itemVariants}
                        layout
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-40 object-cover rounded-md"
                            />
                          </div>
                          
                          <div className="md:w-3/4 flex flex-col md:flex-row justify-between">
                            <div className="flex-grow">
                              <h3 className="text-lg md:text-xl font-serif text-[#1e2d40]">{item.name}</h3>
                              <p className="text-sm text-gray-600 font-serif italic">{item.description}</p>
                              <p className="mt-2 text-sm text-[#5b4636]">Category: {item.category}</p>
                              <p className="mt-1 text-lg font-semibold text-[#a67c52]">${item.price}</p>
                            </div>
                            
                            <div className="flex flex-col justify-between mt-4 md:mt-0">
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <motion.button
                                  whileHover={{ backgroundColor: "#f3f0e6" }}
                                  whileTap={{ scale: 0.95 }}
                                  className="p-2 text-[#5b4636]"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus size={16} />
                                </motion.button>
                                
                                <span className="px-4 py-1 font-serif">{item.quantity}</span>
                                
                                <motion.button
                                  whileHover={{ backgroundColor: "#f3f0e6" }}
                                  whileTap={{ scale: 0.95 }}
                                  className="p-2 text-[#5b4636]"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus size={16} />
                                </motion.button>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.05, color: "#ff4d4d" }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 text-[#5b4636] flex items-center justify-center"
                                onClick={() => initiateRemove(item.id)}
                              >
                                <Trash2 size={16} className="mr-1" />
                                <span className="text-sm">Remove</span>
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
            
            {/* Order Summary */}
            {cartItems.length > 0 && (
              <motion.div 
                className="lg:w-1/3"
                variants={summaryVariants}
              >
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-serif mb-6 text-[#1e2d40] border-b border-gray-200 pb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-serif">Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items)</span>
                      <span className="font-serif">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="font-serif">Shipping</span>
                      <span className="font-serif">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    {shipping === 0 && (
                      <div className="text-sm italic text-[#a67c52] font-serif">
                        Complimentary shipping on orders above $500
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between font-semibold">
                        <span className="font-serif text-lg">Total</span>
                        <span className="font-serif text-lg">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-6 py-3 bg-[#a67c52] text-[#e8e4d9] rounded-md font-serif text-lg flex items-center justify-center"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2" size={18} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ backgroundColor: "#f3f0e6" }}
                    className="w-full mt-4 px-6 py-3 border border-[#a67c52] text-[#a67c52] rounded-md font-serif text-lg"
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.main>
      
      {/* Removal Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-xl font-serif text-[#1e2d40] mb-4">Remove Item</h3>
              <p className="font-serif mb-6">Are you sure you want to remove this item from your cart?</p>
              
              <div className="flex justify-end gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-gray-300 rounded-md font-serif"
                  onClick={cancelRemove}
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-red-600 text-white rounded-md font-serif"
                  onClick={confirmRemove}
                >
                  Remove
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default CartPage;