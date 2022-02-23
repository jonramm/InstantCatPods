import { React, useEffect } from "react";
import { useState } from 'react';

function OrderInputOptions() {

    const [orders, setOrders] = useState([])
    
    const loadOrders = async () => {
        const response = await fetch('/retrieve/orders');
        const data = await response.json();
        setOrders(data)
    }

    useEffect(() => {
        loadOrders();
    }, [])

    return (
        <>
            {orders.map((orders, i) => (<option>{orders.id}</option>))}
        </>
    )
}

export default OrderInputOptions;