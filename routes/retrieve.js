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
    db.query('SELECT a.id, a.name, u.last_name FROM avatars a LEFT JOIN users u ON a.user_id = u.id;', (err, result) => {
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

router.get('/single-cosmetic/:id', (req, res) => {
    console.log(req.params.id)
    db.query(`SELECT description FROM cosmetics WHERE id = ${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/orders', (req, res) => {
    db.query('SELECT o.id, u.last_name, order_date, total, status FROM orders o JOIN users u ON u.id = o.user_id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/orders-cosmetics', (req, res) =>  {
    db.query('SELECT o.id, c.description FROM orders_cosmetics oc JOIN orders o ON o.id = oc.order_id JOIN cosmetics c on c.id = oc.asset_id ORDER BY o.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/users-cosmetics', (req, res) =>  {
    db.query('SELECT u.id, c.description FROM users_cosmetics uc JOIN users u ON u.id = uc.user_id JOIN cosmetics c on c.id = uc.asset_id ORDER BY u.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

module.exports = router