const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();


router.get('/',authController.firstlook);


router.post('/signup', authController.signup);


module.exports = router;