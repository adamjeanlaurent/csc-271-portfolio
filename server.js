const express = require('express');
const exphbs = require('express-handlebars');
const getSocks = require('./lib/getSocks');

const app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    return res.render('index');
});

app.get('/sock/:sockId', (req, res) => {
    const { sockId } = req.params;
    const sock = getSocks(sockId);
    return res.render('sock', { sock: sock });
});

app.get('/buy', (req, res) => {
    return res.render('buy');
});

app.get('/cart', (req, res) => {
    return res.render('cart');
});

app.listen(3000);