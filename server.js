// Boilerplate Setup

require('dotenv').config();

const PORT = process.env.PORT || 4000;

const express = require('express');
const app = express();
const path = require('path');

const retrieve = require('./routes/retrieve')
const create = require('./routes/create')
const destroy = require('./routes/destroy')
const update = require('./routes/update')

app.use(express.urlencoded({
    extended: true
  }));

app.use(express.json())

// Serves up production build of React app
app.use(express.static(path.join(__dirname, 'build')));

// Routes for our various get / post / put requests
app.use('/retrieve', retrieve)
app.use('/create', create)
app.use('/destroy', destroy)
app.use('/update', update)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});
