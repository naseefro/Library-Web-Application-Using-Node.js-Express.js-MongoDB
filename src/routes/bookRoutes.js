const express = require('express');
const booksRouter = express.Router();
const mongoose = require('mongoose');
const BookData = require('../model/BookData');

function router(nav) {

    booksRouter.route('/')
        .get((req, res) => {
            BookData.find()
                .then(function(books) {
                    res.render(
                        'books', {
                            nav,
                            title: "Books List",
                            books
                        });
                });

        });

    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            BookData.findOne({ _id: id })
                .then(function(book) {
                    res.render(
                        'book', {
                            nav,
                            title: "Books List",
                            book
                        });
                });
        });
    return booksRouter;
}

module.exports = router;