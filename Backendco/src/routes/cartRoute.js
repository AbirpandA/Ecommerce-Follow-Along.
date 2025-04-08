const express = require('express');
const router = express.Router();
const auth = require('../middlewares/tokenAuth');
const cartController = require('../controllers/cartController');

router.get('/', auth, cartController.getCart);
router.post('/', auth, cartController.addToCart);
router.put('/increase/:id', auth, cartController.increaseQuantity);
router.put('/decrease/:id', auth, cartController.decreaseQuantity);
router.delete('/clear', auth, cartController.clearCart);

module.exports = router;
