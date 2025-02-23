const { signUp, login } = require('../controllers/userController')
const { loginvalidation, signUpvalidation } = require('../middlewares/userValidation')


const router = require('express').Router()



router.post('/login',loginvalidation,login)

router.post('/signUp',signUpvalidation,signUp)

module.exports = router