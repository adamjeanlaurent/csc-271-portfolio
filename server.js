const express = require('express');
const exphbs = require('express-handlebars');
const getSocks = require('./lib/getSocks');

const app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    return res.redirect('/index');
});

app.get('/index', (req, res) => {
    return res.render('index', {
        styles: [
            '../styles/index.css',
            '../styles/footer.css',
            '../styles/homepage.css'
        ]
    });
});

app.get('/sock/:sockId', (req, res) => {
    const { sockId } = req.params;
    const sock = getSocks(sockId);
    return res.render('sock', { 
        sock: sock,
        styles: [
            '../styles/footer.css',
            '../styles/index.css',
            '../styles/sock.css'
        ]
     });
});

app.get('/buy', (req, res) => {
    return res.render('buy', {
        styles: [
            '../styles/index.css',
            '../styles/footer.css'
        ] 
    });
});

app.get('/cart', (req, res) => {
    return res.render('cart', {
        styles: [
            '../styles/index.css',
            '../styles/footer.css',
            '../styles/cart.css'
        ]
    });
});

app.get('/*', (req, res) => {
    res.status(404);
    return res.render('404', {
        styles: [
            '../styles/index.css',
            '../styles/footer.css',
        ]
    });
});

app.listen(3000);