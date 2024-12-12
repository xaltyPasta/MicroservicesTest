const express = require('express');

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));


app.get('/', (req, res) => {

    for (let i = 0; i < 10000000000; i++) {

    }
    res.send('Hello World')
})


app.listen(3002,()=>{
    console.log('Server is running on http://localhost:3002');
})