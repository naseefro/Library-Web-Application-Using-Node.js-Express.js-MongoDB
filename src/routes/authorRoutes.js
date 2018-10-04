const express = require('express');
const authorsRouter = express.Router();
const AuthorData = require('../model/AuthorData');

function router(nav) {

    authorsRouter.route('/')
        .get((req, res) => {
            AuthorData.find()
                .then(function(authors) {
                    res.render(
                        'authors', {
                            nav,
                            title: "Authors List",
                            authors
                        });
                });

        });

    authorsRouter.route('/:id')
        .get((req, res) => {

            const id = req.params.id;
            AuthorData.findOne({ _id: id })
                .then(function(author) {
                    res.render(
                        'author', {
                            nav,
                            title: "Authors List",
                            author
                        });
                });
        });
    return authorsRouter;
}

module.exports = router;