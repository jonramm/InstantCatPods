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
    db.query('SELECT * FROM avatars', (err, result) => {
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

module.exports = router