const express = require('express')
const router = express.Router()
const db = require('../dbcon')

// Update routes.  
// Clicking edit redirects user to a form prepopulated with that table's data.
// User edits that data, and submits, which will go to approrpriate request for DB.

// Users
router.put('/users', (req, res) => {
	inserts = [req.body.first_name, 
	req.body.last_name, 
	req.body.screen_name, 
	req.body.dob, req.body.id];
	
	sql_update_users = "UPDATE users SET first_name=?, last_name=?, screen_name=?, dob=? WHERE id=?";
	
    db.query(sql_update_users, inserts, (err, result) => {
        if(err) {
          console.log(err)
		  res.write(JSON.stringify(err))
		  res.end();
        }
        res.status(200)
		res.end()
      })
});

// Avatars
router.put('/avatars', (req, res) => {

  	if (req.body.name && req.body.user_id) {
	  
	  inserts = [req.body.name, 
	  req.body.user_id, 
	  req.body.id];
	  
	  sql_update_avatars = "UPDATE avatars SET name=?, user_id=? WHERE id=?";
	  
    db.query(sql_update_avatars, inserts, (err, result) => {
      if(err) {
        console.log(err);
		res.write(JSON.stringify(err));
		res.end();
      }
      res.status(200)
	  res.end()
    })
  } else {
	  
	inserts = [req.body.name, req.body.id];
	
	sql_update_avatars = "UPDATE avatars SET name=?, user_id=NULL WHERE id=?";
	
    db.query(sql_update_avatars, inserts, (err, result) => {
      if(err) {
        console.log(err)
		res.write(JSON.stringify(err));
		res.end();
      }
      res.status(200)
	  res.end()
    })
  }
})

// Cosmetics
router.put('/cosmetics/:id', (req,res) =>{
	
	inserts = [req.body.description, 
	req.body.type, 
	req.body.price, 
	req.params.id];
	
	sql_update_cosmetics = "UPDATE cosmetics SET description=?, type=?, price=?, WHERE id=?";
	
	db.query(sql_update_cosmetics, inserts, (err, result) => {
		if(err) {
        console.log(err);
		res.write(JSON.stringify(err));
		res.end();
      }
      res.status(200)
	  res.end()	
	})	
})

// Orders
router.put('/orders/:id', (req,res) =>{
	
	inserts = [req.body.order_date, 
	req.body.total, 
	req.body.status,
	req.body.user_id,
	req.params.id];
	
	sql_update_orders = "UPDATE orders SET order_date=?, total=?, status=?, user_id=?, WHERE id=?";
	
	db.query(sql_update_orders, inserts, (err, result) => {
		if(err) {
        console.log(err);
		res.write(JSON.stringify(err));
		res.end();
      }
      res.status(200)
	  res.end()	
	})	
})

// Order-Cosmetics
router.put('/order-cosmetics/:order_id/:asset_id', (req,res) =>{
	
	inserts = [req.body.order_id, 
	req.body.cosmetic,
	req.params.order_id,
	req.params.asset_id];
	
	sql_update_order_cosmetics = "UPDATE orders_cosmetics SET order_id=?, asset_id=?, WHERE order_id=? AND asset_id=?";
	
	db.query(sql_update_order_cosmetics, inserts, (err, result) => {
		if(err) {
        console.log(err);
		res.write(JSON.stringify(err));
		res.end();
      }
      res.status(200)
	  res.end()	
	})	
})

// User-Cosmetics
router.put('/user-cosmetics/:user_id/:asset_id', (req,res) =>{
	
	inserts = [req.body.user_id, 
	req.body.cosmetic,
	req.params.user_id,
	req.params.asset_id];
	
	sql_update_user_cosmetics = "UPDATE users_cosmetics SET user_id=?, asset_id=?, WHERE user_id=? AND asset_id=?";
	
	db.query(sql_update_user_cosmetics, inserts, (err, result) => {
		if(err) {
        console.log(err);
		res.write(JSON.stringify(err));
		res.end();
      }
      res.status(200)
	  res.end()	
	})	
})

module.exports = router

