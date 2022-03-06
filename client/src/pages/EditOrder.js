import React, { useEffect } from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ordersIcon from '../images/ordersicon.png';
import UserInputOptions from "../components/UserInputOptions";

function EditOrder({ orderToEdit }) {

    const [order_date, setOrderDate] = useState(orderToEdit.order_date)
    const [total, setTotal] = useState(orderToEdit.total)
    const [status, setStatus] = useState(orderToEdit.status)
    const [user_id, setUserId] = useState(orderToEdit.user_id)
    const [id, setId] = useState(orderToEdit.id)

    const month = order_date.slice(5, 7)
    const day = order_date.slice(8, 10)
    const year = order_date.slice(0, 4)

    const navigate = useNavigate()

    const editOrder = async (e) => {
        e.preventDefault();
        const newOrder = { order_date, total, status, user_id };
        const response = await fetch(`/update/orders/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert('Successfully edited the order!')
            navigate('/orders')
        } else {
            alert(`Failed to edit order, status code = ${response.status}.`)
            navigate('/orders')
        }
    }

    return (
        <>
            <img src={ordersIcon} alt="avatars icon" />
            <h1 className="title-header">Edit Order</h1>
            <form className="form-width">
                <div class="form-input">
                    <div class="form-group">
                        <label for="user">User: </label>
                        <select class="form-control"
                            type="number"
                            id="user"
                            value={user_id}
                            onChange={e => setUserId(e.target.value)}>
                            <option value=''>{orderToEdit.first_name + ' ' + orderToEdit.last_name}</option>
                            <UserInputOptions />
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="order_date">Order Date: </label>
                        <input class="form-control"
                            id="order_date"
                            type="date"
                            value={order_date.substring(0, 10)}
                            onChange={e => setOrderDate(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="total">Total: </label>
                        <input class="form-control" 
                               id="total"
                               type="number"
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
                <button class="btn btn-primary" onClick={editOrder}>Submit Changes</button>
            </form>
        </>
    )
}

export default EditOrder;