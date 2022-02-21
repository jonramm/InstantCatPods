const mysql = require('mysql')

// const db = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB
// })

const db = mysql.createConnection({
    host: process.env.FLIP_HOST,
    user: process.env.FLIP_USER,
    password: process.env.FLIP_PASSWORD,
    database: process.env.FLIP_DB
})

module.exports = db