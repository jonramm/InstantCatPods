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

            <ItemsTable orderItems={orderItems}/>
        </>
    )
}

export default ViewOrder;