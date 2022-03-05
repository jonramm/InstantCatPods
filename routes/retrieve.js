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

router.get('/users-filter/:first_name', (req, res) => {
    let query = 'SELECT * FROM users WHERE '
    if (req.params.first_name !== '') {
        query += `first_name = '${req.params.first_name}'`
    }
    query += ';'
    db.query(query, (err, result) => {
        if(err) {
            console.log(err)
          }
          res.send(result)
    })
})

router.get('/avatars', (req, res) => {
    db.query('SELECT a.id, a.name, u.first_name, u.last_name, a.user_id FROM avatars a LEFT JOIN users u ON a.user_id = u.id;', (err, result) => {
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
    db.query(`SELECT description, price FROM cosmetics WHERE id = ${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/orders', (req, res) => {
    db.query('SELECT o.id, u.first_name, u.last_name, order_date, total, status, o.user_id FROM orders o JOIN users u ON u.id = o.user_id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/order-items/:id', (req, res) => {
    db.query(`SELECT c.description, c.price FROM orders o JOIN orders_cosmetics oc ON o.id = oc.order_id JOIN cosmetics c ON oc.asset_id = c.id WHERE o.id = ${req.params.id};`, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/last-order', (req, res) => {
    db.query('SELECT id FROM orders WHERE id= LAST_INSERT_ID();', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/orders-cosmetics', (req, res) =>  {
    db.query('SELECT o.id, c.description, oc.asset_id FROM orders_cosmetics oc JOIN orders o ON o.id = oc.order_id JOIN cosmetics c on c.id = oc.asset_id ORDER BY o.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/users-cosmetics', (req, res) =>  {
    db.query('SELECT u.id, c.description, uc.asset_id FROM users_cosmetics uc JOIN users u ON u.id = uc.user_id JOIN cosmetics c on c.id = uc.asset_id ORDER BY u.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

module.exports = router