require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

connection.connect()

app.use(express.json);
app.use(express.static('public'));




app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});