const express = require('express');   
const trackController = require('../controllers/trackController');
const requireAuth = require('../middlewares/requireAuth');


const router = express.Router();
router.use(requireAuth);

router.get('/track',trackController.track);
router.post('/track',trackController.trackPost);
module.exports = router;