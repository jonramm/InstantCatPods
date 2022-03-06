import React, { useEffect } from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ordersIcon from '../images/ordersicon.png';

function ViewOrder({ orderToView }) {

    const [order_date, setOrderDate] = useState(orderToView.order_date)
    const [total, setTotal] = useState(orderToView.total)
    const [status, setStatus] = useState(orderToView.status)
    const [user_id, setUserId] = useState(orderToView.user_id)
    const [id, setId] = useState(orderToView.id)
    const [orderItems, setOrderItems] = useState([])

    const month = order_date.slice(5, 7)
    const day = order_date.slice(8, 10)
    const year = order_date.slice(0, 4)
    const first_name = orderToView.first_name
    const last_name = orderToView.last_name


    const loadOrderItems = async (orderId) => {
        const response = await fetch(`/retrieve/order-items/${orderId}`);
        const data = await response.json();
        setOrderItems(data)
    }

    useEffect(() => {
        loadOrderItems(id)
    }, [])

    console.log(orderItems)

    return (
        <>
            <img src={ordersIcon} alt="orders icon" />
            <h1 className="title-header">Order ID: {id}</h1>
            <div class="card col-4 order-display">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item order-details">{first_name + ' ' + last_name}</li>
                    <li class="list-group-item order-details">{month + ' / ' + day + ' / ' + year}</li>
                    <li class="list-group-item order-details">${total}</li>
                    <li class="list-group-item order-details">{status}</li>
                    {orderItems.map((item, i) => (<li class="list-group-item">{item.description} - ${item.price}</li>))}
                </ul>
            </div>
            <div class="links-container">
                <button type="button" class="btn btn-secondary">
                    <Link class="relationship-links" to="/orders">Back To Orders</Link>
                </button>
            </div>
            
        </>
    )
}

export default ViewOrder;