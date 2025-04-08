const Cart = require('../models/cart');

// 📥 GET user's cart
const getCart = async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.user._id }).populate({
            path: 'productId',
            select: 'name price images',
        });

        const filteredCart = cart.filter((item) => item.productId !== null);
        res.json(filteredCart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load cart' });
    }
};

// ➕ POST add item to cart
const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
        return res.status(400).json({ error: 'Product ID and quantity are required' });
    }

    try {
        let item = await Cart.findOne({ userId: req.user._id, productId });

        if (item) {
            item.quantity += quantity;
        } else {
            item = new Cart({ userId: req.user._id, productId, quantity });
        }

        await item.save();
        await item.populate('productId');

        const cart = await Cart.find({ userId: req.user._id }).populate('productId');
        res.json(cart);
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Failed to add to cart' });
    }
};

// 🔼 PUT increase quantity
const increaseQuantity = async (req, res) => {
    try {
        let item = await Cart.findOne({
            userId: req.user._id,
            productId: req.params.id,
        });

        if (item) {
            item.quantity += 1;
            await item.save();
        }

        const updatedCart = await Cart.find({ userId: req.user._id }).populate({
            path: 'productId',
            select: 'name price images'
        });

        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to increase quantity' });
    }
};

// 🔽 PUT decrease quantity
const decreaseQuantity = async (req, res) => {
    try {
        let item = await Cart.findOne({
            userId: req.user._id,
            productId: req.params.id,
        });

        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                await item.save();
            } else {
                await Cart.deleteOne({ _id: item._id });
            }
        }

        const updatedCart = await Cart.find({ userId: req.user._id }).populate({
            path: 'productId',
            select: 'name price images'
        });

        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to decrease quantity' });
    }
};

// ❌ DELETE clear cart
const clearCart = async (req, res) => {
    try {
        await Cart.deleteMany({ userId: req.user._id });
        res.json([]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to clear cart' });
    }
};

// ✅ Export all at once
module.exports = {
    getCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
};
