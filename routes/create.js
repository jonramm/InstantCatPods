const express = require('express')
const router = express.Router()
const db = require('../dbcon')


router.post('/users', (req, res) => {
    db.query(`INSERT INTO users (first_name, last_name, screen_name, dob) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.screen_name}', '${req.body.dob}');`, (err, result) => {
        if(err) {
          console.log(err)
        }
        res.send(result)
      })
})

router.post('/avatars', (req, res) => {
  console.log(req.body)
  if (req.body.name && req.body.user_id) {
    db.query(`INSERT INTO avatars (name, user_id) VALUES ('${req.body.name}', ${req.body.user_id});`, (err, result) => {
      if(err) {
        console.log(err)
      }
      res.send(result)
    })
  } else {
    db.query(`INSERT INTO avatars (name) VALUES ('${req.body.name}');`, (err, result) => {
      if(err) {
        console.log(err)
      }
      res.send(result)
    })
  }
  
})

module.exports = router
