const express = require('express')
const router = express.Router()
const db = require('../dbcon')


router.post('/users', (req, res) => {
    console.log(req.body)
    db.query(`INSERT INTO users (first_name, last_name, screen_name, dob) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.screen_name}', '${req.body.dob}');`, (err, result) => {
        if(err) {
          console.log(err)
        }
        res.send(result)
      })
})

module.exports = router
