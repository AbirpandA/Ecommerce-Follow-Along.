const { signUp, login, profile } = require('../controllers/userController')
const { loginvalidation, signUpvalidation } = require('../middlewares/userValidation')
const auth=require('../middlewares/tokenAuth')


const router = require('express').Router()



router.post('/login',loginvalidation,login)

router.post('/signUp',signUpvalidation,signUp)
router.get('/profile',auth,profile)

module.exports = router