const express = require('express')
const router = express.Router()
const db = require('../dbcon')

router.delete('/users/:id', (req, res) => {
    db.query(`DELETE FROM users WHERE id = ${req.params.id};`, (err, result) => {
        if(err) {
          console.log(err)
        }
        res.send(result)
      })
})

router.delete('/avatars/:id', (req, res) => {
    db.query(`DELETE FROM avatars WHERE id = ${req.params.id};`, (err, result) => {
        if(err) {
          console.log(err)
        }
        res.send(result)
      })
})

router.delete('/cosmetics/:id', (req, res) => {
  db.query(`DELETE FROM cosmetics WHERE id = ${req.params.id};`, (err, result) => {
      if(err) {
        console.log(err)
      }
      res.send(result)
    })
})

router.delete('/orders/:id', (req, res) => {
  db.query(`DELETE FROM orders WHERE id = ${req.params.id};`, (err, result) => {
      if(err) {
        console.log(err)
      }
      res.send(result)
    })
})

module.exports = router