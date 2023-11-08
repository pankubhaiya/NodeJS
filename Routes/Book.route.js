// all Book router
const bookController = require('../controllers/Book.Controler');
const express = require('express');
const router = express.Router();
router.use(express.json());

router.post('/addbook', bookController.createBook);
router.get('/getbook', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.patch('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = {router};
