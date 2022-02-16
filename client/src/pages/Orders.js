import { React, useEffect } from "react";
import { useState } from 'react';
import ordersIcon from '../images/ordersicon.png';
import OrdersTable from "../components/OrdersTable";

function Orders() {

    const [order_id, setOrderId] = useState('')
    const [user, setUser] = useState('')
    const [order_date, setOrderDate] = useState('')
    const [total, setTotal] = useState(0)
    const [status, setStatus] = useState('')
    const [orders, setOrders] = useState([])

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

    const addOrder = async () => {
        // function for adding an order to db
        alert('Adding order...')
    }

    useEffect(() => {
        loadOrders();
    }, [])

    return (
        <>
            <>
                <img src={ordersIcon} />
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
                                <option>John Doe</option>
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
                                type="text"
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
                    <button onClick={addOrder}>Insert</button>
                    <button name="search_btn" type="submit">Search</button>
                </form>

                <OrdersTable orders={orders} />

                <div class="links-container">
                    <button type="button" class="btn btn-secondary">
                        <a class="relationship-links" href="./order-cosmetics.html"> Order Cosmetics</a>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        <a class="relationship-links" href="./users-cosmetics.html">User Cosmetics</a>
                    </button>
                </div>
            </>
        </>
    )
}

export default Orders;