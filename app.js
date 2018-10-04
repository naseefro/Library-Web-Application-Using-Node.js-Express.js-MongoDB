const express = require('express');
const chalk = require('chalk'); //const chalk is a object
const path = require('path');

var app = new express();
const nav = [{
        link: '/Books',
        title: 'Books'
    },
    {
        link: '/Authors',
        title: 'Authors'
    },
    {
        link: '/publishers',
        title: 'Publishers'
    },
    {
        link: '/admin',
        title: 'Add Books'
    },
    {
        link: '/addauthor',
        title: 'Add Authors'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const publishersRouter = require('./src/routes/publisherRoutes')(nav);
const addBooksRouter = require('./src/routes/addBooksRoutes')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav);
app.use(express.static(path.join(__dirname, "public")));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/publishers', publishersRouter);
app.use('/admin', addBooksRouter);
app.use('/addauthor', addAuthorRouter);
app.get('/', function(req, res) {
    res.render(
        'index', {
            nav,
            title: "Library"
        });
});


app.get('/', function(req, res) {
    res.render(
        'index', {
            nav,
            title: "Library"
        });
});

app.listen(3000, function() {
    console.log('listening to port ' + chalk.blue('3000')); //chalk.green() is a function
});