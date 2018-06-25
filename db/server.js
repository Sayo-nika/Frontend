const path = require('path');
const express = require('express');
const data = require(path.join(__dirname, 'db'));
const app = express();

app.$data = data;

app.use(express.json());
app.use('/v1', require(path.join(__dirname, '/routes/v1')));

app.listen(3001, () => console.log('Fake API available at port 3001'));
