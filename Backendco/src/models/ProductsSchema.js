
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  // Basic product information
  name: {
    type: String,
    required: true
  },
  
  category: {
    type: String,
    required: true,
    enum: [
      'Painting Supplies',
      'Drawing Supplies',
      'Canvas & Paper',
      'Board Games',
      'Chess Sets',
      'Musical Instruments',
      'Sculpture Tools',
      'Calligraphy Supplies',
      'Vintage Art Replicas',
      'Art Books',
      'Collectible Pieces',
      'Limited Editions'
    ]
  },
  
  description: {
    type: String,
    required: true
  },
  
  price: {
    type: Number,
    required: true
  },
  
  stock: {
    type: Number,
    required: true
  },
  
  // Optional physical attributes
  dimensions: {
    type: String,
    required: false
  },
  
  weight: {
    type: Number,
    required: false
  },
  
  // Art-specific details
  materials: {
    type: String,
    required: false
  },
  
  artistName: {
    type: String,
    required: false
  },
  
  artStyle: {
    type: String,
    required: false,
    enum: [
      '',
      'Renaissance',
      'Baroque',
      'Medieval',
      'Classical',
      'Contemporary',
      'Abstract',
      'Impressionist',
      'Romantic',
      'Neoclassical',
      'Gothic',
      'Other'
    ]
  },
  
  era: {
    type: String,
    required: false,
    enum: [
      '',
      'Pre-Renaissance',
      'Early Renaissance (14th-15th century)',
      'High Renaissance (15th-16th century)',
      'Northern Renaissance',
      'Baroque Era',
      'Romantic Era',
      'Victorian Era',
      'Modern Era',
      'Contemporary'
    ]
  },
  
  provenance: {
    type: String,
    required: false
  },
  
  // Product images
  images: [String],
  
  // Featured flag - for highlighting products on homepage, etc.
  featured: {
    type: Boolean,
    default: false
  },
  
  // Ratings - for product reviews
  ratings: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  
  // Timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);