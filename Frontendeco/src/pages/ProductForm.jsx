import { useState } from 'react';
import { X, Upload, Plus, Sparkles, ArrowRight } from 'lucide-react';

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
    era: '',
    provenance: '',
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
    'Collectible Pieces',
    'Limited Editions',
  ];
  
  const artStyles = [
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
    'Other',
  ];

  const eras = [
    'Pre-Renaissance',
    'Early Renaissance (14th-15th century)',
    'High Renaissance (15th-16th century)',
    'Northern Renaissance',
    'Baroque Era',
    'Romantic Era',
    'Victorian Era',
    'Modern Era',
    'Contemporary',
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
    
    // API call would go here
    
    
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
      era: '',
      provenance: '',
    });
    setImages([]);
    setPreviewImages([]);
  };
  
  return (
    <div className="min-h-screen bg-stone-100 p-6" style={{backgroundImage: 'url("https://cdnjs.cloudflare.com/ajax/libs/pattern.css/1.0.0/images/patterns/marble-light.png")', backgroundBlendMode: 'overlay'}}>
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl border border-amber-100">
        <div className="bg-gradient-to-r from-[#1a2638] via-[#1e2d40] to-[#314763] p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200"></div>
          <h1 className="text-4xl text-amber-50 text-center font-serif italic tracking-wide">
            <span className="inline-block mr-2"><Sparkles size={24} className="inline text-amber-300" /></span>
            Curate Your Masterpiece
          </h1>
          <p className="text-center text-blue-200 mt-3 font-serif italic text-lg">
            Share the beauty of timeless art with our connoisseurs
          </p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Name */}
            <div className="col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="Vintage Easel Set"
              />
            </div>
            
            {/* Category and Price */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm appearance-none bg-stone-50"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ArrowRight size={16} className="text-amber-700 transform rotate-90" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
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
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="29.99"
              />
            </div>
            
            {/* Art Style and Stock */}
            <div>
              <label htmlFor="artStyle" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Art Style
              </label>
              <div className="relative">
                <select
                  id="artStyle"
                  name="artStyle"
                  value={formData.artStyle}
                  onChange={handleChange}
                  className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm appearance-none bg-stone-50"
                >
                  <option value="">Select art style (optional)</option>
                  {artStyles.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ArrowRight size={16} className="text-amber-700 transform rotate-90" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="era" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Historical Era
              </label>
              <div className="relative">
                <select
                  id="era"
                  name="era"
                  value={formData.era}
                  onChange={handleChange}
                  className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm appearance-none bg-stone-50"
                >
                  <option value="">Select historical era (optional)</option>
                  {eras.map((era) => (
                    <option key={era} value={era}>
                      {era}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ArrowRight size={16} className="text-amber-700 transform rotate-90" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
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
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="10"
              />
            </div>
            
            {/* Materials and Artist */}
            <div>
              <label htmlFor="materials" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Materials
              </label>
              <input
                type="text"
                id="materials"
                name="materials"
                value={formData.materials}
                onChange={handleChange}
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="Wood, Canvas, Metal"
              />
            </div>
            
            <div>
              <label htmlFor="artistName" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Artist/Maker Name
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="Renaissance Arts Craft Guild"
              />
            </div>
            
            {/* Physical Attributes */}
            <div>
              <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Dimensions
              </label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="12 x 16 x 3 inches"
              />
            </div>
            
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
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
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="2.5"
              />
            </div>

            {/* Provenance */}
            <div className="col-span-2">
              <label htmlFor="provenance" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Provenance <span className="text-xs text-gray-500">(Optional history or origin of the product)</span>
              </label>
              <input
                type="text"
                id="provenance"
                name="provenance"
                value={formData.provenance}
                onChange={handleChange}
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="Created using traditional techniques from Northern Italy..."
              />
            </div>
            
            {/* Description */}
            <div className="col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-amber-100 rounded-md focus:ring-1 focus:ring-amber-200 focus:border-amber-200 shadow-sm bg-stone-50"
                placeholder="Describe your beautiful art product in detail..."
              ></textarea>
            </div>
            
            {/* Image Upload */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                Product Images
              </label>
              
              <div className="mt-1 flex justify-center px-8 pt-6 pb-8 border-2 border-amber-100 border-dashed rounded-md bg-stone-50 shadow-inner">
                <div className="space-y-2 text-center">
                  <Upload className="mx-auto h-12 w-12 text-emerald-700" />
                  <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-600">
                    <label 
                      htmlFor="images" 
                      className="relative cursor-pointer bg-gradient-to-r from-[#1e2d40] to-[#314763] py-2 px-6 rounded-md font-medium text-white hover:from-[#1a2638] hover:to-[#2c3f59] focus-within:outline-none shadow-md transition-all duration-300 mb-2 sm:mb-0"
                    >
                      <span className="flex items-center">
                        <Sparkles size={16} className="mr-2 text-amber-300" />
                        <span>Upload images</span>
                      </span>
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
                    PNG, JPG, GIF up to 10MB — High-quality images display your product's true essence
                  </p>
                </div>
              </div>
              
              {/* Preview Images */}
              {previewImages.length > 0 && (
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {previewImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={img} 
                        alt={`Preview ${index}`} 
                        className="h-32 w-full object-cover rounded-md shadow-md border border-amber-50" 
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  
                  {/* Add more images button */}
                  <div 
                    className="h-32 border-2 border-dashed border-amber-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-stone-100 transition-colors"
                    onClick={() => document.getElementById('images').click()}
                  >
                    <Plus className="text-amber-700" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-800 to-emerald-700 text-white py-4 px-6 rounded-md hover:from-emerald-900 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 transition-all duration-300 shadow-lg font-serif text-lg"
            >
              <span className="flex items-center justify-center">
                <Sparkles size={18} className="mr-2 text-amber-200" />
                Add Masterpiece to Collection
              </span>
            </button>
          </div>
        </form>
      </div>
      
      {/* Decorative elements */}
      <div className="w-full max-w-4xl mx-auto mt-8 flex justify-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default ProductForm;