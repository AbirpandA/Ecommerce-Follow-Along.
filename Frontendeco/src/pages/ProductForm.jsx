import  { useState } from 'react';
import { X, Upload, Plus } from 'lucide-react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    dimensions: '',
    weight: '',
    materials: '',
    artistName: '',
    artStyle: '',
  });
  
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  
  const categories = [
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
  ];
  
  const artStyles = [
    'Renaissance',
    'Baroque',
    'Medieval',
    'Classical',
    'Contemporary',
    'Abstract',
    'Impressionist',
    'Other',
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      // Preview images
      const newPreviewImages = filesArray.map(file => URL.createObjectURL(file));
      setPreviewImages([...previewImages, ...newPreviewImages]);
      
      // Store actual files for form submission
      setImages([...images, ...filesArray]);
    }
  };
  
  const removeImage = (index) => {
    const updatedPreviewImages = [...previewImages];
    const updatedImages = [...images];
    
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(updatedPreviewImages[index]);
    
    updatedPreviewImages.splice(index, 1);
    updatedImages.splice(index, 1);
    
    setPreviewImages(updatedPreviewImages);
    setImages(updatedImages);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create form data object to handle files
    const productData = new FormData();
    
    // Add text fields
    Object.keys(formData).forEach(key => {
      productData.append(key, formData[key]);
    });
    
    // Add images
    images.forEach(image => {
      productData.append('productImages', image);
    });
    
    // Here you would normally send this data to your backend
    console.log("Form submitted with data:", formData);
    console.log("Images to upload:", images);
    
   
    
    // Reset form after submission
    setFormData({
      name: '',
      category: '',
      description: '',
      price: '',
      stock: '',
      dimensions: '',
      weight: '',
      materials: '',
      artistName: '',
      artStyle: '',
    });
    setImages([]);
    setPreviewImages([]);
  };
  
  return (
    <div className="min-h-screen bg-stone-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#1e2d40] p-6">
          <h1 className="text-3xl  text-amber-50 text-center font-serif italic ">Add New Renaissance Product</h1>
          <p className="text-center text-blue-200 mt-2 font-serif italic ">Share the beauty of art with our community</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-stone-300 focus:border-stone-300"
                placeholder="Vintage Easel Set"
              />
            </div>
            
            {/* Category and Price */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:stroke-neutral-100 focus:border-stone-300"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
                placeholder="29.99"
              />
            </div>
            
            {/* Art Style and Stock */}
            <div>
              <label htmlFor="artStyle" className="block text-sm font-medium text-gray-700 mb-1">
                Art Style
              </label>
              <select
                id="artStyle"
                name="artStyle"
                value={formData.artStyle}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
              >
                <option value="">Select art style (optional)</option>
                {artStyles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
                placeholder="10"
              />
            </div>
            
            {/* Materials and Artist */}
            <div>
              <label htmlFor="materials" className="block text-sm font-medium text-gray-700 mb-1">
                Materials
              </label>
              <input
                type="text"
                id="materials"
                name="materials"
                value={formData.materials}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
                placeholder="Wood, Canvas, Metal"
              />
            </div>
            
            <div>
              <label htmlFor="artistName" className="block text-sm font-medium text-gray-700 mb-1">
                Artist/Maker Name
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
                placeholder="Renaissance Arts Craft Guild"
              />
            </div>
            
            {/* Physical Attributes */}
            <div>
              <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-1">
                Dimensions
              </label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
                placeholder="12 x 16 x 3 inches"
              />
            </div>
            
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (lbs)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                min="0"
                step="0.1"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
                placeholder="2.5"
              />
            </div>
            
            {/* Description */}
            <div className="col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-300 focus:border-stone-300"
                placeholder="Describe your beautiful art product in detail..."
              ></textarea>
            </div>
            
            {/* Image Upload */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Images
              </label>
              
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-gray-50">
                <div className="space-y-2 text-center">
                  <Upload className="mx-auto h-12 w-12 text-teal-700" />
                  <div className="flex text-sm text-gray-600">
                    <label 
                      htmlFor="images" 
                      className="relative cursor-pointer bg-[#314763] py-2 px-4 rounded-md font-medium text-white hover:bg-[#2c3f59] focus-within:outline-none"
                    >
                      <span>Upload images</span>
                      <input 
                        id="images" 
                        name="images" 
                        type="file" 
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="sr-only" 
                      />
                    </label>
                    <p className="pl-3 pt-2">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              
              {/* Preview Images */}
              {previewImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {previewImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={img} 
                        alt={`Preview ${index}`} 
                        className="h-24 w-full object-cover rounded-md" 
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  
                  {/* Add more images button */}
                  <div 
                    className="h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50"
                    onClick={() => document.getElementById('images').click()}
                  >
                    <Plus className="text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-3 px-4 rounded-md hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-300-500 focus:ring-offset-2 transition-colors"
            >
              Add Product to Collection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;