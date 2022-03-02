import { React, useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ordersIcon from '../images/ordersicon.png';
import OrdersTable from "../components/OrdersTable";
import UserInputOptions from "../components/UserInputOptions";

function Orders() {

    const [user_id, setUserId] = useState('')
    const [order_date, setOrderDate] = useState('')
    const [total, setTotal] = useState()
    const [status, setStatus] = useState('')
    const [orders, setOrders] = useState([])
    const [cosmetic, setCosmetic] = useState('')
    const [components, setComponents] = useState([]); 

    const loadOrders = async () => {
        // function for retrieving users from db
        const response = await fetch('/retrieve/orders');
        const data = await response.json();
        setOrders(data)
    }

    const clearFields = () => {
        setUserId()
        setOrderDate('')
        setTotal()
        setStatus('')
    }

    function addCosmetic() {
        if (components.indexOf(cosmetic) === -1) {
            setComponents([...components, cosmetic])
        }
    }

    const createOrder = async (e) => {
        e.preventDefault();
        const newUser = { user_id, order_date, total, status };
        if (user_id && order_date && total && status) {
            const response = await fetch('/create/orders', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Successfully added the order!')
                clearFields();
                loadOrders();
            } else {
                alert(`Failed to add order, status code = ${response.status}.`)
                clearFields();
            }
        } else {
            alert('Please fill out all fields')
        }
    }

    const deleteOrder = async id => {
        const response = await fetch(`/destroy/orders/${id}`, { method: 'DELETE' });
        if (response.status === 200) {
            alert('Successfully deleted the order!')
            loadOrders()
        } else {
            alert(`Failed to delete order, status code = ${response.status}.`)
        }
    }

    useEffect(() => {
        loadOrders();
    }, [])

    return (
        <>
            <>
                <img src={ordersIcon} alt="orders icon" />
                <h1>Orders</h1>
                <div className="container instructions table-dark bg-dark">
                    <h3>Add new order or search existing orders</h3>
                </div>
                <form>
                    <div class="form-input">
                        <div class="form-group">
                            <label for="user">User: </label>
                            <select class="form-control"
                                type="number"
                                id="user"
                                value={user_id}
                                onChange={e => setUserId(e.target.value)}>
                                <option value=''>--please select a user--</option>
                                <UserInputOptions />
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="order_date">Order Date: </label>
                            <input class="form-control"
                                type="date"
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
                            <select class="form-control"
                                type="text"
                                id="status"
                                value={status}
                                onChange={e => setStatus(e.target.value)}>
                                <option value=''>--please select a status</option>
                                <option>Paid</option>
                                <option>Pending</option>
                                <option>Declined</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={createOrder}>Insert</button>
                    {/* <Link to="/order-details"
                        state={{ user_id: user_id, order_date: order_date, total: total, status: status }}>
                        <button class="btn btn-primary">Add Cosmetics</button>
                    </Link> */}
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <OrdersTable orders={orders} onDelete={deleteOrder} />

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