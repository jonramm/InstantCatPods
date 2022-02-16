require('dotenv').config();

const PORT = process.env.PORT || 4000;


const express = require('express');
const app = express();

const path = require('path');

// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB
// })

// connection.connect()

app.use(express.urlencoded({
    extended: true
  }));


// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});