import React, { useEffect } from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ordersIcon from '../images/ordersicon.png';
import ItemsTable from "../components/ItemsTable";

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

    return (
        <>
            <img src={ordersIcon} alt="orders icon" />
            <h1>Order ID: {id}</h1>
            <div class="row justify-content-around view-row">
            <div class="card col-4 order-display">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{first_name + ' ' + last_name}</li>
                    <li class="list-group-item">{month + '-' + day + '-' + year}</li>
                    <li class="list-group-item">{total}</li>
                    <li class="list-group-item">{status}</li>
                </ul>
            </div>
            <ItemsTable class="col-4" orderItems={orderItems} />
            </div>
            
        </>
    )
}

export default ViewOrder;