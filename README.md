# E-commerce Follow-Along Project

## Project Overview: The Gilded Gallery (MERN Stack)

**The Gilded Gallery** is a full-stack e-commerce application inspired by old-era art and minimalistic aesthetics. This project leverages the MERN stack (MongoDB, Express.js, React.js, Node.js) to create a seamless shopping experience.

---

### Key Features:
- **User Authentication:** Secure login and registration with JWT.
- **Product Management:** CRUD operations for products, with features like filtering and sorting.
- **Order Handling:** Users can place and view orders.
- **REST API:** Build scalable API endpoints for managing users, products, and orders.
- **Frontend:** Responsive UI built with React for a smooth user experience.
- **Clean Landing Page:** Clean landing page with interactive animations like scroll transitions.
- **Art-Inspired UI/UX:** Inspired by the art pieces of Vincent van Gogh and Da Vinci.

---

### Core Concepts:
- **MERN Stack:** Using MongoDB, Express.js, React.js, and Node.js for full-stack development.
- **Gsap:** Using GSAP for interactive animations and Locomotive for seamless yet interactive experiences.
- **REST APIs:** Design and develop API endpoints for user and product management.
- **Authentication:** Implement secure login and session management.
- **Database Schema:** Design MongoDB schemas for users, products, and orders.

---

## Milestones

### Milestone 1: Project Overview
- **Description:** Introduction to the project and its key features.

### Milestone 2: Login Page Layout Added
- **Features:**
  - User-friendly interface with responsive layout.
  - Form elements for email and password input.
  - Styling with Tailwind CSS.
  - Basic error handling.

### Milestone 3: Backend Added
- **Features:**
  - API endpoints for user authentication, product management, and order processing.
  - Database integration with MongoDB.
  - Authentication using JWT.
  - Comprehensive error handling.
  - Middleware for logging, parsing request bodies, and managing CORS.

### Milestone 4: Backend Enhancements
- **Features:**
  - Created a User Model and User Controller.
  - Enabled file uploads with Multer.

### Milestone 5: Signup Page Added
- **Features:**
  - User registration form with name, email, password, and profile picture upload.
  - Form validation and password visibility toggle.
  - Form submission using Axios.
  - Basic error handling.

### Milestone 6: Database Added to Signup Page
- **Features:**
  - User data storage in MongoDB.
  - Backend validation for duplicate emails.
  - Encrypted passwords using bcrypt.
  - Confirmation message after successful registration.

### Milestone 7: Logic Added to Signup and Login Pages
- **Features:**
  - Improved data validation, user authentication, error handling, and database integration.

### Milestone 8: Home Page with Product Display
- **Features:**
  - Product display in a grid layout.
  - Responsive design for optimal viewing on different devices.
  - User-friendly interface with hover effects and animations.

### Milestone 9: Product Management Frontend
- **Features:**
  - React.js frontend to interact with the Product API.
  - Form to add new products.
  - Connects to Express & MongoDB API.

### Milestone 10: Product API
- **Features:**
  - Create a product with name, description, price, and image.
  - Validates input before storing data in MongoDB.
  - RESTful POST endpoint to add products.

### Milestone 11: Dynamic Home Page
- **Features:**
  - Endpoint to extract and send data from MongoDB.
  - Receive and display data dynamically using the product card component.

### Milestone 12: My Products Page
- **Features:**
  - Backend endpoint to fetch products by user email.
  - Frontend function to retrieve and display products dynamically.
  - Utilized the Card component to present each product.

### Milestone 13: Edit Product Functionality
- **Features:**
  - Endpoint to update existing data in MongoDB.
  - Autofill forms with previous data for editing.

### Milestone 14: Delete Product Functionality
- **Features:**
  - Endpoint to delete existing data in MongoDB.
  - Deletes the product from the page.

### Milestone 15: Responsive Navbar Added
- **Features:**
  - Nav component with links to Home, Add Product, and Cart pages.
  - Responsive design for all screen sizes.
  - Reusable Navbar component.

### Milestone 16: Product Detail Page Added
- **Features:**
  - Detailed information about the product.
  - Links to Buy and Cart pages.
  - Responsive design for all screen sizes.
  - Shows similar products at the bottom of the page.

### Milestone 17: Cart Functionality in Node.js + MongoDB
- **Features:**
  - Create a cart, add products to the cart, retrieve cart details, and remove products from the cart.

### Milestone 18: Fetch Products in Cart using User Email
- **Features:**
  - Backend endpoint to retrieve cart data, including full product details, using the user's email.

### Milestone 19: Cart Functionality Implementation
- **Features:**
  - Cart frontend page displays products dynamically.
  - Quantity counter with + and - buttons.
  - Backend endpoints to handle quantity updates.

### Milestone 20: Profile Page and User Data API
- **Features:**
  - Profile page displays key user information.
  - Backend endpoint to retrieve all user data.
  - Option to add new addresses.

### Milestone 21: Form to Add User Address
- **Features:**
  - Address form with fields for country, city, address lines, zip code, and address type.
  - Navigation to the address form page.
  - Data logging upon form submission.

### Milestone 22: Creating Backend Endpoint to Store Address
- **Features:**
  - Backend API endpoint to receive and store address data.
  - Adds the submitted address to the user's address array in the database.

### Milestone 23: Select Address Page and Order Schema
- **Features:**
  - "Select Address" page on the frontend.
  - Mongoose schema to manage order details in the backend.

### Milestone 24: Order Confirmation Page
- **Features:**
  - View list of products being ordered.
  - See the selected delivery address.
  - Check the total cart value.
  - Place the order using a "Place Order" button.

### Milestone 25: Backend Endpoint for Placing Orders
- **Features:**
  - API endpoint to accept products, user details, and address information.
  - Store order details in the MongoDB order collection.

### Milestone 26: Create Backend Endpoint for Place Order
- **Features:**
  - API endpoint to retrieve all orders for a specific user.
  - Fetch and send orders associated with the user's email.

### Milestone 27: My Orders Page
- **Features:**
  - Frontend page to display all user orders.
  - API integration to fetch user order data.
  - Navbar link for easier navigation to the My Orders page.

### Milestone 28: Cancel Orders Feature
- **Features:**
  - Cancel Order button on the My Orders page.
  - Backend endpoint to handle order cancellation.

### Milestone 29: Integrate Online Payments with PayPal API
- **Features:**
  - Set up PayPal Sandbox Account.
  - Update Order Confirmation Page with payment options.
  - Display PayPal buttons for online payment.

### Milestone 30: Online Payment Integration with PayPal API
- **Features:**
  - PayPal API integration for online payments.
  - Implementation of secure payment methods.
  - Usage of the react-paypal-js package.

### Milestone 32: Adding Mail to Global State with Redux
- **Features:**
  - Global state management with Redux.
  - Store and access user's email across all pages.

### Milestone 33: Creating JWT Tokens and Storing in Cookies
- **Features:**
  - Create and store JWT tokens in browser cookies.
  - Secure and persistent session management.

