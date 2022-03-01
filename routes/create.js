const express = require('express')
const router = express.Router()
const db = require('../dbcon')

// I changed the way insertions are done for the db.query
// and updated the error handling to match the examples from class

router.post('/users', (req, res) => {
	
	inserts = [req.body.first_name, req.body.last_name, req.body.screen_name, req.body.dob];
	
	sql_insert_user = 
	"INSERT INTO users (first_name, last_name, screen_name, dob) VALUES (?,?,?,?)";
	
    db.query(sql_insert_user, inserts, (err, result) => {
        if(err) {
          console.log(err)
		  res.write(JSON.stringify(err));
		  res.end();
        }
        res.send(result)
      })
})

router.post('/avatars', (req, res) => {
	
  if (req.body.name && req.body.user_id) {
	  
	  inserts = [req.body.name, req.body.user_id]
	  
	  sql_insert_avatar = 
	  "INSERT INTO avatars (name, user_id) VALUES (?,?)";
	  
    db.query(sql_insert_avatar, inserts, (err, result) => {
      if(err) {
        console.log(err);
		res.write(JSON.stringify(err));
		res.end();
      }
      res.send(result)
    })
  } else {
	  
	inserts = [req.body.name];
	
	sql_insert_avatar = 
	"INSERT INTO avatars (name) VALUES (?)";
	
    db.query(sql_insert_avatar, inserts, (err, result) => {
      if(err) {
        console.log(err)
		res.write(JSON.stringify(err));
		res.end();
      }
      res.send(result)
    })
  }
})

router.post('/cosmetics', (req, res) => {
	
	inserts = [req.body.description, req.body.type, req.body.price];
	
	sql_insert_cosmetics = 
	"INSERT INTO cosmetics (description, type, price) VALUES (?,?,?)";

	db.query(sql_insert_cosmetics, inserts, (err, result) => {
    if(err) {
      console.log(err)
	  res.write(JSON.stringify(err));
	  res.end();
    }
    res.send(result)
  })
})

router.post('/orders', (req, res) => {
	
	inserts = [req.body.order_date, req.body.total, req.body.status, req.body.user_id];
	
	sql_insert_orders = 
	"INSERT INTO orders (order_date, total, status, user_id) VALUES (?,?,?,?)";
	
	db.query(sql_insert_orders, inserts, (err, result) => {
    if(err) {
      console.log(err)
	  res.write(JSON.stringify(err));
	  res.end();
    }
    res.send(result)
  })
})

module.exports = router
