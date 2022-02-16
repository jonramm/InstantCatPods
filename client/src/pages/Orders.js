import { React, useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ordersIcon from '../images/ordersicon.png';
import OrdersTable from "../components/OrdersTable";
import UserInputOptions from "../components/UserInputOptions";

function Orders() {

    const [user, setUser] = useState('')
    const [order_date, setOrderDate] = useState('')
    const [total, setTotal] = useState()
    const [status, setStatus] = useState('')
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])

    const loadOrders = async () => {
        // function for retrieving users from db
        const orders = {
            order_id: 1,
            user: "John Doe",
            order_date: "2/16/22",
            total: 19.99,
            status: 'Paid'
        }
        setOrders([orders])
    }

    const loadUsers = async () => {
        const users = [{first_name: "John",
                      last_name: "Doe"},
                      {first_name: "Jane",
                      last_name: "Doe"}]
        {console.log(users)}
        for (const obj of users) {
            setUsers(arr => [...arr, obj])
        }
    }

    const addOrder = async () => {
        // function for adding an order to db
        alert('Adding order...')
    }

    useEffect(() => {
        loadOrders();
        loadUsers();
    }, [])

    return (
        <>
            <>
                <img src={ordersIcon} alt="orders icon"/>
                <h1>Orders</h1>
                <form>
                    <div class="form-input">
                        <div class="form-group">
                            <label for="user">User: </label>
                            <select class="form-control"
                                type="text"
                                id="user"
                                value={user}
                                onChange={e => setUser(e.target.value)}>
                                <option>--please select a user--</option>
                                <UserInputOptions users={ users }/>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="order_date">Order Date: </label>
                            <input class="form-control"
                                type="text"
                                id="order_date"
                                value={order_date}
                                onChange={e => setOrderDate(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="total">Total: </label>
                            <input class="form-control"
                                type="number"
                                step="any"
                                id="total"
                                value={total}
                                onChange={e => setTotal(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="status">Status: </label>
                            <input class="form-control"
                                type="number"
                                id="status"
                                value={status}
                                onChange={e => setStatus(e.target.value)} />
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={addOrder}>Insert</button>
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <OrdersTable orders={orders} />

                <div class="links-container">
                    <button type="button" class="btn btn-secondary">
                        <Link class="relationship-links" to="/order-cosmetics"> Order Cosmetics</Link>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        <Link class="relationship-links" to="/user-cosmetics">User Cosmetics</Link>
                    </button>
                </div>
            </>
        </>
    )
}

export default Orders;