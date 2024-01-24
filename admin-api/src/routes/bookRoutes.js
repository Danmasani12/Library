const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.post('/add', bookController.addBook);

// Other book-related routes...

module.exports = router;
