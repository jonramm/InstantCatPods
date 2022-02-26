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

module.exports = router