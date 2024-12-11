const express = require('express');

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));


app.get('/stress-test', (req, res) => {

    for (let i = 0; i < 100000000; i++) {

    }
    res.send('Hello World')
})
