const express = require('express');   
const authController = require('../controllers/authController');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();


router.get('/',requireAuth,authController.firstlook);


router.post('/signup', authController.signup);
router.post('/signin', authController.signin);


module.exports = router;