const path = require('path');
const express = require('express');
const morgan = require('morgan');
const data = require(path.join(__dirname, 'db'));

const app = express();
const logger = morgan('dev', {
  skip: req => process.env.NODE_ENV === 'test' || req.path === '/favicon.ico'
});

app.$data = data;

app.use(express.json());
app.use(logger);
app.use('/api/v1', require(path.join(__dirname, '/routes/v1')));

app.get('/api', (req, res) => {
  res.send('lol docs or smth will be here soon');
});

app.listen(process.env.PORT || 3001, () => console.log(`Fake API available at port ${process.env.PORT || 3001}\n`));
