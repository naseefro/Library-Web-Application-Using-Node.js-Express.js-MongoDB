const express = require('express');
const BookData = require('../model/BookData');
const addBooksRouter = express.Router();

function router(nav) {
    addBooksRouter.route('/')
        .get((req, res) => {
            res.render(
                'addBook', {
                    nav,
                    title: "Add Books"
                }
            );
        });
    addBooksRouter.route('/add')
        .get((req, res) => {
            var item = {
                title: req.param("title"),
                author: req.param("author"),
                pages: req.param("pages"),
                images: req.param("images")
            }
            var book = new BookData(item);
            book.save();
            res.redirect('/books');

        });


    return addBooksRouter;
}
module.exports = router;