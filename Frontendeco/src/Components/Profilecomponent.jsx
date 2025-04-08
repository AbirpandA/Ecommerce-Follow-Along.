import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Mock user data based on the provided schema
const mockUser = {
  name: "Isabella Medici",
  email: "isabella@gildedgallery.com",
  gender: "Female",
  address: "1428 Florentine Avenue, Renaissance Heights, IT 52101",
  profilePic: "/api/placeholder/150/150",
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Profilecomponent() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [activeTab, setActiveTab] = useState("profile");

  const handleChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(editedUser);
    setIsEditing(false);
    // Here you would make an API call to update the user profile
  };

  return (
    <div className="bg-[#1e2d40] min-h-screen text-[#e8e4d9] font-serif pt-17 px-4">
      <main className="container mx-auto px-4 py-10">
        <motion.div
          className="bg-[#243447] shadow-lg rounded-md overflow-hidden border border-[#a67c52]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-[#1a2736] p-8 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-8"
              >
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="rounded-full w-36 h-36 object-cover border-4 border-[#a67c52] shadow-lg"
                />
              </motion.div>

              <motion.h2
                className="text-2xl font-serif text-[#e8e4d9] mb-2"
                variants={fadeIn}
              >
                {user.name}
              </motion.h2>

              <motion.p
                className="text-[#b5b0a3] mb-8 italic"
                variants={fadeIn}
              >
                {user.email}
              </motion.p>

              <div className="w-full">
                <nav className="flex flex-col space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#2a3e59" }}
                    whileTap={{ scale: 0.97 }}
                    className={`p-4 rounded-md text-left transition-all duration-300 ${
                      activeTab === "profile"
                        ? "bg-[#2a3e59] text-[#e8e4d9] border-l-4 border-[#a67c52]"
                        : "text-[#e8e4d9] hover:bg-[#243447]"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    Profile Information
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#2a3e59" }}
                    whileTap={{ scale: 0.97 }}
                    className={`p-4 rounded-md text-left transition-all duration-300 ${
                      activeTab === "orders"
                        ? "bg-[#2a3e59] text-[#e8e4d9] border-l-4 border-[#a67c52]"
                        : "text-[#e8e4d9] hover:bg-[#243447]"
                    }`}
                    onClick={() => setActiveTab("orders")}
                  >
                    Order History
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#2a3e59" }}
                    whileTap={{ scale: 0.97 }}
                    className={`p-4 rounded-md text-left transition-all duration-300 ${
                      activeTab === "favorites"
                        ? "bg-[#2a3e59] text-[#e8e4d9] border-l-4 border-[#a67c52]"
                        : "text-[#e8e4d9] hover:bg-[#243447]"
                    }`}
                    onClick={() => setActiveTab("favorites")}
                  >
                    Favorites
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#2a3e59" }}
                    whileTap={{ scale: 0.97 }}
                    className={`p-4 rounded-md text-left transition-all duration-300 ${
                      activeTab === "settings"
                        ? "bg-[#2a3e59] text-[#e8e4d9] border-l-4 border-[#a67c52]"
                        : "text-[#e8e4d9] hover:bg-[#243447]"
                    }`}
                    onClick={() => setActiveTab("settings")}
                  >
                    Settings
                  </motion.button>
                </nav>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              {activeTab === "profile" && (
                <>
                  <div className="flex justify-between items-center mb-8 border-b border-[#3d4e64] pb-4">
                    <h3 className="text-2xl font-serif text-[#e8e4d9]">
                      Profile Information
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#b68d63" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-[#a67c52] text-[#e8e4d9] rounded-md hover:bg-[#b68d63] transition-colors duration-300"
                      onClick={() => {
                        if (isEditing) {
                          setEditedUser(user);
                        }
                        setIsEditing(!isEditing);
                      }}
                    >
                      {isEditing ? "Cancel" : "Edit Profile"}
                    </motion.button>
                  </div>

                  {isEditing ? (
                    <motion.form
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      onSubmit={handleSubmit}
                    >
                      <div className="space-y-6">
                        <motion.div variants={fadeIn}>
                          <label className="block text-[#b5b0a3] mb-2 text-sm">
                            NAME
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={editedUser.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-[#1a2736] border border-[#3d4e64] rounded-md text-[#e8e4d9] focus:border-[#a67c52] focus:outline-none"
                          />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                          <label className="block text-[#b5b0a3] mb-2 text-sm">
                            EMAIL
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={editedUser.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-[#1a2736] border border-[#3d4e64] rounded-md text-[#e8e4d9] focus:border-[#a67c52] focus:outline-none"
                          />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                          <label className="block text-[#b5b0a3] mb-2 text-sm">
                            GENDER
                          </label>
                          <select
                            name="gender"
                            value={editedUser.gender}
                            onChange={handleChange}
                            className="w-full p-3 bg-[#1a2736] border border-[#3d4e64] rounded-md text-[#e8e4d9] focus:border-[#a67c52] focus:outline-none"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                          <label className="block text-[#b5b0a3] mb-2 text-sm">
                            ADDRESS
                          </label>
                          <textarea
                            name="address"
                            value={editedUser.address}
                            onChange={handleChange}
                            className="w-full p-3 bg-[#1a2736] border border-[#3d4e64] rounded-md text-[#e8e4d9] focus:border-[#a67c52] focus:outline-none"
                            rows="3"
                          ></textarea>
                        </motion.div>

                        <motion.div
                          variants={fadeIn}
                          className="flex justify-end pt-4"
                        >
                          <motion.button
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "#b68d63",
                            }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="px-8 py-3 bg-[#a67c52] text-[#e8e4d9] rounded-md hover:bg-[#b68d63] transition-colors duration-300"
                          >
                            Save Changes
                          </motion.button>
                        </motion.div>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      className="space-y-8"
                    >
                      <motion.div
                        variants={fadeIn}
                        className="border-b border-[#3d4e64] pb-4"
                      >
                        <h4 className="text-sm text-[#b5b0a3] mb-2">
                          FULL NAME
                        </h4>
                        <p className="text-[#e8e4d9] text-lg">{user.name}</p>
                      </motion.div>

                      <motion.div
                        variants={fadeIn}
                        className="border-b border-[#3d4e64] pb-4"
                      >
                        <h4 className="text-sm text-[#b5b0a3] mb-2">EMAIL</h4>
                        <p className="text-[#e8e4d9] text-lg">{user.email}</p>
                      </motion.div>

                      <motion.div
                        variants={fadeIn}
                        className="border-b border-[#3d4e64] pb-4"
                      >
                        <h4 className="text-sm text-[#b5b0a3] mb-2">GENDER</h4>
                        <p className="text-[#e8e4d9] text-lg">{user.gender}</p>
                      </motion.div>

                      <motion.div variants={fadeIn}>
                        <h4 className="text-sm text-[#b5b0a3] mb-2">ADDRESS</h4>
                        <p className="text-[#e8e4d9] text-lg">{user.address}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </>
              )}

              {activeTab === "orders" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-serif text-[#e8e4d9] mb-8 border-b border-[#3d4e64] pb-4">
                    Order History
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-[#1a2736] p-6 rounded-md border border-[#3d4e64]">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[#e8e4d9]">Order #RF289</h4>
                        <span className="text-[#a67c52]">March 15, 2025</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-[#b5b0a3]">
                        <span>3 items</span>
                        <span>$1,280.00</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#3d4e64]">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="text-[#a67c52] hover:text-[#b68d63] transition-colors duration-300"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>

                    <div className="bg-[#1a2736] p-6 rounded-md border border-[#3d4e64]">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[#e8e4d9]">Order #RF187</h4>
                        <span className="text-[#a67c52]">
                          February 21, 2025
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-[#b5b0a3]">
                        <span>1 item</span>
                        <span>$750.00</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#3d4e64]">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="text-[#a67c52] hover:text-[#b68d63] transition-colors duration-300"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "favorites" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-serif text-[#e8e4d9] mb-8 border-b border-[#3d4e64] pb-4">
                    Favorites
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-[#1a2736] rounded-md overflow-hidden border border-[#3d4e64]"
                    >
                      <div className="h-48 bg-[#243447] flex items-center justify-center">
                        <img
                          src="/api/placeholder/300/200"
                          alt="Product"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-[#e8e4d9] font-serif mb-2">
                          Florentine Pendant
                        </h4>
                        <p className="text-[#a67c52] mb-4">$580.00</p>
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#b68d63",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-2 bg-[#a67c52] text-[#e8e4d9] rounded-md hover:bg-[#b68d63] transition-colors duration-300"
                        >
                          Add to Cart
                        </motion.button>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-[#1a2736] rounded-md overflow-hidden border border-[#3d4e64]"
                    >
                      <div className="h-48 bg-[#243447] flex items-center justify-center">
                        <img
                          src="/api/placeholder/300/200"
                          alt="Product"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-[#e8e4d9] font-serif mb-2">
                          Venetian Picture Frame
                        </h4>
                        <p className="text-[#a67c52] mb-4">$320.00</p>
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#b68d63",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-2 bg-[#a67c52] text-[#e8e4d9] rounded-md hover:bg-[#b68d63] transition-colors duration-300"
                        >
                          Add to Cart
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === "settings" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-serif text-[#e8e4d9] mb-8 border-b border-[#3d4e64] pb-4">
                    Account Settings
                  </h3>
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#1a2736" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-between items-center p-4 border border-[#3d4e64] rounded-md bg-[#243447] text-[#e8e4d9]"
                    >
                      <span>Change Password</span>
                      <span>→</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#1a2736" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-between items-center p-4 border border-[#3d4e64] rounded-md bg-[#243447] text-[#e8e4d9]"
                    >
                      <span>Newsletter Preferences</span>
                      <span>→</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#1a2736" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-between items-center p-4 border border-[#3d4e64] rounded-md bg-[#243447] text-[#e8e4d9]"
                    >
                      <span>Privacy Settings</span>
                      <span>→</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#2a1f1f" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-between items-center p-4 border border-[#5e3a3a] rounded-md bg-[#3d2828] text-[#e8baba]"
                    >
                      <span>Delete Account</span>
                      <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
