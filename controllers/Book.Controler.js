const {BookModel} = require('../Model/Book.model');

async function createBook(req, res) {
    try {
        const {title,author,summary} = req.body
        if(!title || !author || !summary){
            return res.status(400).send({error: "All fields  requires"});
        }
        const book = new BookModel(req.body);
        await book.save();
        res.status(200).send({message:"Book Data save"});
    } catch (err) {
       return res.status(400).send({ error: err.message });
    }
};

async function getBooks(req, res) {
    const books = await BookModel.find();
    res.json(books);
};

async function getBookById(req, res) {
    const book = await BookModel.findById(req.params.id);
    if (book) {
        res.status(200).send(book);
    } else {
        res.status(404).send({ error: 'Book not found' });
    }
};

async function updateBook(req, res) {
    try {
        const book = await BookModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({message:"Book Data Update"});
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

async function deleteBook(req, res) {
    try {
        await BookModel.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Book Data Delete"});
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}