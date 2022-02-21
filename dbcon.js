const mysql = require('mysql')

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.FLIP_HOST,
//     user: process.env.FLIP_USER,
//     password: process.env.FLIP_PASSWORD,
//     database: process.env.FLIP_DB
// })

// module.exports.pool = pool

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

module.exports = db