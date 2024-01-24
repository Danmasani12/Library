const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/list', userController.listUsers);
router.get('/list-books', userController.listUsersAndBooks);

// Other user-related routes...

module.exports = router;
