const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/enroll', userController.enrollUser);

// Other user-related routes...

module.exports = router;
