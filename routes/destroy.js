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