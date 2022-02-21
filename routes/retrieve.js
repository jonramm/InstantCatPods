const express = require('express')
const router = express.Router()
const db = require('../dbcon')

router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if(err) {
          console.log(err)
        }
        res.send(result)
      })
})

router.get('/avatars', (req, res) => {
    db.query('SELECT a.id, a.name, u.last_name FROM avatars a JOIN users u ON a.id = u.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/cosmetics', (req, res) => {
    db.query('SELECT * FROM cosmetics', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/orders', (req, res) => {
    db.query('SELECT o.id, u.last_name, order_date, total, status FROM orders o JOIN users u ON u.id = o.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

module.exports = router