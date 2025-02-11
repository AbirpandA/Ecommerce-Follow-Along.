import  { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, User } from 'lucide-react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif text-stone-800">The Gilded Gallery</h1>
          <p className="text-stone-600 italic font-serif">
            "Beauty in simplicity, wisdom in restraint"
          </p>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center">
          <div className="w-24 h-24 border-2 border-stone-300 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 border border-stone-400 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-stone-600" />
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="space-y-2">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Enter your username"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-800 placeholder-stone-400"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-200 font-medium"
          >
            Join the Gallery
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center text-stone-400 text-sm">
          Already have an account?{' '}
          <a href="#" className="text-stone-600 hover:text-stone-800">
            Sign in
          </a>
        </div>

        {/* Stoic Quote */}
        <div className="text-center text-stone-500 text-sm italic font-serif">
          "The soul becomes dyed with the color of its thoughts."
          <br />
          — Marcus Aurelius
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;