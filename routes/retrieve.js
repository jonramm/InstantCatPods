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

// SEARCH
router.post('/users-filter', (req, res) => {
    let queryClause = 'WHERE '
	let multiParam = false
	
    if (req.body.first_name !== '') {
        queryClause += `first_name = '${req.body.first_name}'`
		multiParam = true
    }
    if (req.body.last_name !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `last_name = '${req.body.last_name}'`
		multiParam = true
    }
    if (req.body.screen_name !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `screen_name = '${req.body.screen_name}'`
		multiParam = true
    }
    if (req.body.dob !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `dob = '${req.body.dob}'`
		multiParam = true
    }

    db.query(`SELECT * FROM users ${queryClause};`, (err, result) => {
        if(err) {
            console.log(err)
          }
          res.send(result)
    })
})

router.get('/avatars', (req, res) => {
    db.query('SELECT a.id, a.name, u.first_name, u.last_name, a.user_id FROM avatars a LEFT JOIN users u ON a.user_id = u.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

// SEARCH
router.post('/avatars-filter', (req, res) => {
    let queryClause = 'WHERE '
	let multiParam = false
	
    if (req.body.user_id !== undefined) {
        if (req.body.user_id === '') {
            queryClause += `a.user_id IS NULL`
            multiParam = true
        } else {
            queryClause += `a.user_id = '${req.body.user_id}'`
		    multiParam = true
        } 
    }
    
    if (req.body.name !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `a.name = '${req.body.name}'`
		multiParam = true
    }
    db.query(`SELECT a.id, a.name, u.first_name, u.last_name, a.user_id FROM avatars a LEFT JOIN users u ON a.user_id = u.id ${queryClause};`, (err, result) => {
        if(err) {
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

router.get('/single-cosmetic/:id', (req, res) => {
    db.query(`SELECT description, price FROM cosmetics WHERE id = ${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

// SEARCH
router.post('/cosmetics-filter', (req, res) => {
    let queryClause = 'WHERE '
	let multiParam = false
	
    if (req.body.description !== '') {
        queryClause += `description = '${req.body.description}'`
		multiParam = true
    }
    if (req.body.type !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `type = '${req.body.type}'`
		multiParam = true
    }
	if (req.body.price !== undefined) {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `price = '${req.body.price}'`
		multiParam = true
    }
    db.query(`SELECT * FROM cosmetics ${queryClause};`, (err, result) => {
        if(err) {
            console.log(err)
          }
          res.send(result)
    })
})


router.get('/orders', (req, res) => {
    db.query('SELECT o.id, u.first_name, u.last_name, order_date, total, status, o.user_id FROM orders o JOIN users u ON u.id = o.user_id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

// SEARCH
router.post('/orders-filter', (req, res) => {
    console.log(req.body)
    let queryClause = 'WHERE '
	let multiParam = false
	
    if (req.body.user_id !== '') {
        queryClause += `user_id = '${req.body.user_id}'`
		multiParam = true
    }
    if (req.body.order_date !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `order_date = '${req.body.order_date}'`
		multiParam = true
    }
	// if (req.body.total !== null) {
	// 	if(multiParam)
	// 	{
	// 		queryClause += ' AND '
	// 	}
    //     queryClause += `total = '${req.body.total}'`
	// 	multiParam = true
    // }
	if (req.body.status !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `status = '${req.body.status}'`
		multiParam = true
    }
    console.log(queryClause)
    db.query(`SELECT o.id, u.first_name, u.last_name, order_date, total, status, o.user_id FROM orders o JOIN users u ON u.id = o.user_id ${queryClause};`, (err, result) => {
        if(err) {
            console.log(err)
          }
          res.send(result)
    })
})

router.get('/order-items/:id', (req, res) => {
    db.query(`SELECT c.description, c.price FROM orders o JOIN orders_cosmetics oc ON o.id = oc.order_id JOIN cosmetics c ON oc.asset_id = c.id WHERE o.id = ${req.params.id};`, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/last-order', (req, res) => {
    db.query('SELECT id FROM orders WHERE id= LAST_INSERT_ID();', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

router.get('/orders-cosmetics', (req, res) =>  {
    db.query('SELECT o.id, c.description, oc.asset_id FROM orders_cosmetics oc JOIN orders o ON o.id = oc.order_id JOIN cosmetics c on c.id = oc.asset_id ORDER BY o.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

// SEARCH
router.post('/orders-cosmetics-filter', (req, res) => {
    let queryClause = 'WHERE '
	let multiParam = false
	
    if (req.body.order_id !== '') {
        queryClause += `order_id = ${req.body.order_id}`
		multiParam = true
    }
    if (req.body.asset_id !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `asset_id = ${req.body.asset_id}`
		multiParam = true
    }
    db.query(`SELECT o.id, c.description, oc.asset_id FROM orders_cosmetics oc JOIN orders o ON o.id = oc.order_id JOIN cosmetics c on c.id = oc.asset_id ${queryClause};`, (err, result) => {
        if(err) {
            console.log(err)
          }
          res.send(result)
    })
})

router.get('/users-cosmetics', (req, res) =>  {
    db.query('SELECT u.id, u.first_name, u.last_name, c.description, uc.asset_id FROM users_cosmetics uc JOIN users u ON u.id = uc.user_id JOIN cosmetics c on c.id = uc.asset_id ORDER BY u.id;', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

// SEARCH
router.post('/users-cosmetics-filter', (req, res) => {
    let queryClause = 'WHERE '
	let multiParam = false
	
    if (req.body.user_id !== '') {
        queryClause += `user_id = '${req.body.user_id}'`
		multiParam = true
    }
    if (req.body.asset_id !== '') {
		if(multiParam)
		{
			queryClause += ' AND '
		}
        queryClause += `asset_id = '${req.body.asset_id}'`
		multiParam = true
    }
    db.query(`SELECT u.id, c.description, uc.asset_id FROM users_cosmetics uc JOIN users u ON u.id = uc.user_id JOIN cosmetics c on c.id = uc.asset_id ${queryClause};`, (err, result) => {
        if(err) {
            console.log(err)
          }
          res.send(result)
    })
})

module.exports = router