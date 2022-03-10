const express = require('express')
const router = express.Router()
const db = require('../dbcon')


// Users DELETE request
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

// Avatars DELETE request
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

// Cosmetics DELETE request
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

// Orders DELETE request
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

// Orders-Cosmetics DELETE request
router.delete('/order-cosmetics/:order_id/:asset_id', (req, res) => {
	
	inserts = [req.params.order_id, req.params.asset_id];
	sql_delete_orders = "DELETE FROM orders_cosmetics WHERE order_id = ? AND asset_id = ?";
	
  db.query(sql_delete_orders, inserts, (err, result) => {
      if(err) {
        console.log(err)
		res.write(JSON.stringify(err))
		res.end();
      }
      res.send(result)
    })
})

// Users-Cosmetics DELETE request
router.delete('/user-cosmetics/:user_id/:asset_id', (req, res) => {
	
	inserts = [req.params.user_id, req.params.asset_id];
	sql_delete_orders = "DELETE FROM users_cosmetics WHERE user_id = ? AND asset_id = ?";
	
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