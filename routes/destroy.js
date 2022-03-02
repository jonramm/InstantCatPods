const express = require('express')
const router = express.Router()
const db = require('../dbcon')

// I changed the way insertions are done for the db.query
// and updated the error handling to match the examples from class

router.delete('/users/:id', (req, res) => {
	
	inserts = [req.params.id];
	sql_delete_users = "DELETE FROM users WHERE id = ?";
	
    db.query(sql_delete_users, inserts, (err, result) => {
        if(err) {
          console.log(err)
		  res.write(JSON.stringify(err))
		  res.end();
        }
        res.send(result)
      })
})

router.delete('/avatars/:id', (req, res) => {
	
	inserts = [req.params.id];
	sql_delete_avatars = "DELETE FROM avatars WHERE id = ?";
	
    db.query(sql_delete_avatars, inserts, (err, result) => {
        if(err) {
          console.log(err)
		  res.write(JSON.stringify(err))
		  res.end();
        }
        res.send(result)
      })
})

router.delete('/cosmetics/:id', (req, res) => {
	
	inserts = [req.params.id];
	sql_delete_cosmetics = "DELETE FROM cosmetics WHERE id = ?";
	
  db.query(sql_delete_cosmetics, inserts, (err, result) => {
      if(err) {
        console.log(err)
		res.write(JSON.stringify(err))
		res.end();
      }
      res.send(result)
    })
})

router.delete('/orders/:id', (req, res) => {
	
	inserts = [req.params.id];
	sql_delete_orders = "DELETE FROM orders WHERE id = ?";
	
  db.query(sql_delete_orders, inserts, (err, result) => {
      if(err) {
        console.log(err)
		res.write(JSON.stringify(err))
		res.end();
      }
      res.send(result)
    })
})

module.exports = router