import { React, useEffect } from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ordersIcon from '../images/ordersicon.png';
import OrdersTable from "../components/OrdersTable";
import UserInputOptions from "../components/UserInputOptions";
import CosmeticInputOptions from "../components/CosmeticInputOptions"

function Orders({ setOrderToEdit, setOrderToView }) {

    const [user_id, setUserId] = useState('')
    const [order_date, setOrderDate] = useState('')
    const [status, setStatus] = useState('')
    const [orders, setOrders] = useState([])
    const [total, setTotal] = useState(0)
    const [totalString, setTotalString] = useState('')

    console.log(orders)

    const [cosmetic, setCosmetic] = useState('')
    const [components, setComponents] = useState([]);

    const navigate = useNavigate()

    const filterOrders = async (e) => {
        e.preventDefault();
        const searchFilters = { user_id, order_date, status, total }
        if (user_id || order_date || status || total) {
            const response = await fetch('/retrieve/orders-filter', {
                method: 'POST',
                body: JSON.stringify(searchFilters),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setOrders(data);
        } else {
            loadOrders()
        }
    }

    const addCosmetic = async () => {

        let cosmeticName = await loadCosmetic(cosmetic)
        const description = cosmeticName[0].description
        const newPrice = cosmeticName[0].price

        let inArray = false

        components.forEach(item => {
            if (item.id === cosmetic) {
                inArray = true
            }
        })

        if (!inArray) {
            setComponents([...components, { id: cosmetic, description: description, price: newPrice }])
            setTotal(total + newPrice)
            setTotalString((Math.round((total + newPrice) * 100) / 100).toFixed(2))
        }
    }

    function removeCosmetic(i, toDelete) {
        let componentsArr = components.filter((item) => item.description !== toDelete.description)
        setComponents(componentsArr)
        setTotal(total - toDelete.price)
        setTotalString((total- toDelete.price).toFixed(2))
    };

    const loadCosmetic = async (id) => {
        const response = await fetch(`/retrieve/single-cosmetic/${id}`)
        const data = await response.json();
        return data
    }


    const loadOrders = async () => {
        // function for retrieving users from db
        const response = await fetch('/retrieve/orders');
        const data = await response.json();
        setOrders(data)
    }

    const loadLastOrder = async () => {
        const response = await fetch('/retrieve/last-order');
        const data = await response.json()
        return (data[0].id)
    }

    const clearFields = () => {
        setUserId()
        setOrderDate('')
        setTotal(0)
        setTotalString('')
        setStatus('')
        setComponents([])
    }

    const createOrder = async (e) => {
        e.preventDefault();
        const newUser = { user_id, order_date, total, status };
        if (user_id && order_date && status) {
            const response = await fetch('/create/orders', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            if (response.status === 200) {
                alert('Successfully added the order!')
                createRelationships()
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

    const editOrder = async orderToEdit => {
        setOrderToEdit(orderToEdit)
        navigate('/edit-order')
    }

    const viewOrder = async orderToView => {
        setOrderToView(orderToView)
        navigate('/view-order')
    }

    const createRelationships = async () => {
        const lastOrder = await loadLastOrder()
        const newOrdersCosmetics = { lastOrder, components };
        const newUsersCosmetics = { user_id, components }
        const response1 = await fetch('/create/orders-cosmetics-bulk', {
            method: 'POST',
            body: JSON.stringify(newOrdersCosmetics),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const response2 = await fetch('/create/users-cosmetics-bulk', {
            method: 'POST',
            body: JSON.stringify(newUsersCosmetics),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response1.status === 200) {
            alert('Successfully added order-cosmetics relationships!')
        }
        if (response2.status === 200) {
            alert('Successfully added user-cosmetics relationships!')
        } else if (response2.status === 519) {
            alert('One or more user-cosmetic relationships already found')
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
            <img src={ordersIcon} alt="orders icon" />
            <h1 className="title-header">Orders</h1>
            <div className="container instructions table-dark bg-dark">
                <h3>Add a new order or filter existing orders. Enter data into the fields on 
                the left and add cosmetics on the right, then click 'Add Order' to submit it 
                to the database. Click 'Filter Results' to display database rows that match 
                specified criteria, or click 'Reset Results' to clear criteria and refresh 
                the results.</h3>
            </div>

            <div className="row justify-content-around">
                <form className="col-4">
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
                            <p class="form-control" id="total">${totalString}</p>
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
                    <button class="btn btn-primary" onClick={createOrder}>Add Order</button>
                    <button class="btn btn-primary" onClick={filterOrders} name="search_btn">Filter Orders</button>
                    <button class="btn btn-primary" onClick={loadOrders} name="reset">Reset Results</button>
                </form>

                <div className='col-4'>
                    <form>
                        <div className="form-input">
                            <label for="cosmetic">Cosmetic: </label>
                            <select class="form-control"
                                type="text"
                                id="cosmetic"
                                value={cosmetic}
                                onChange={e => setCosmetic(e.target.value)}>
                                <option>--please enter a cosmetic--</option>
                                <CosmeticInputOptions />
                            </select>
                        </div>
                    </form>
                    <button class="btn btn-primary" onClick={addCosmetic}>Add Cosmetic</button>
                    <ul className="cosmetics-list">
                        {components.map((item, i) => (
                            <li class="list-group-item">{item.description}
                                <button class="btn btn-primary" onClick={() => removeCosmetic(i, item)}>Delete</button>
                            </li>))}
                    </ul>
                </div>
            </div>




            <OrdersTable orders={orders} onDelete={deleteOrder} onEdit={editOrder} onView={viewOrder} />

            <div class="links-container">
                <button type="button" class="btn btn-secondary">
                    <Link class="relationship-links" to="/order-cosmetics"> Order Cosmetics</Link>
                </button>
                <button type="button" class="btn btn-secondary">
                    <Link class="relationship-links" to="/user-cosmetics">User Cosmetics</Link>
                </button>
            </div>
        </>
    )
}

export default Orders;