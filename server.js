require('dotenv').config();

const PORT = process.env.PORT || 4000;

const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql')
const db = require('./dbcon')
const bodyParser = require('body-parser')

const retrieve = require('./routes/retrieve')
const create = require('./routes/create')
const destroy = require('./routes/destroy')
const update = require('./routes/update')

// const connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB
// })

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!')
// })

app.use(express.urlencoded({
    extended: true
  }));

app.use(express.json())

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'build')));

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
