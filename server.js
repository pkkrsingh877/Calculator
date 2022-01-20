const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const morgan = require('morgan');
const path = require('path');

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

//setting up ejs
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/binarytodecimal', (req, res) => {
    res.render('converter/binaryToDecimal');
});

app.get('/multiply', (req, res) => {
    res.render('calculator/multiply');
});

app.get('/divide', (req, res) => {
    res.render('calculator/divide');
});

app.get('/subtract', (req, res) => {
    res.render('calculator/subtract');
});

app.get('/add', (req, res) => {
    res.render('calculator/add');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('App running at port', port);
});