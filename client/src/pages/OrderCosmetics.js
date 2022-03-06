import { React, useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ordersIcon from '../images/ordersicon.png';
import heart from '../images/heart.gif'
import cosmeticsIcon from '../images/cosmeticsicon.png'
import OrderCosmeticsTable from "../components/OrderCosmeticsTable";
import CosmeticInputOptions from "../components/CosmeticInputOptions";
import OrderInputOptions from "../components/OrderInputOptions";

function OrderCosmetics() {

    const [order_id, setOrder] = useState('')
    const [cosmetic, setCosmetic] = useState('')
    const [orderCosmetics, setOrderCosmetics] = useState([])

    const loadOrderCosmetics = async () => {
        // function for retrieving order cosmetics from db
        const response = await fetch('/retrieve/orders-cosmetics');
        const data = await response.json();
        setOrderCosmetics(data)
    }

    const createOrderCosmetic = async (e) => {
        e.preventDefault();
        const newOrderCosmetic = { order_id, cosmetic };
        if (order_id && cosmetic) {
            const response = await fetch('/create/orders-cosmetics', {
                method: 'POST',
                body: JSON.stringify(newOrderCosmetic),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Successfully added the relationship!!')
                // clearFields();
                loadOrderCosmetics();
            } else {
                alert(`Failed to add relationship, status code = ${response.status}.`)
                // clearFields();
            }
        } else {
            alert('Please fill out all fields')
        }
    }

    const deleteOrderCosmetic = async (order_id, asset_id) => {
        const response = await fetch(`/destroy/order-cosmetics/${order_id}/${asset_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            alert('Successfully deleted the order cosmetic!')
            loadOrderCosmetics()
        } else {
            alert(`Failed to delete order cosmetic, status code = ${response.status}.`)
        }
    }

    useEffect(() => {
        loadOrderCosmetics();
    }, [])

    return (
        <>
            <>
                <img src={ordersIcon} alt="orders icon"/>
                <img src={heart} alt="heart gif"/>
                <img src={cosmeticsIcon} alt="cosmetics icon"/>
                <h1 className="title-header">Order Cosmetics</h1>
                <div className="container instructions table-dark bg-dark">
                    <h3>Add cosmetics to orders</h3>
                </div>
                <form className="form-width">
                    <div class="form-input">
                        <div class="form-group">
                            <label for="order">Order: </label>
                            <select class="form-control"
                                type="number"
                                id="order"
                                value={order_id}
                                onChange={e => setOrder(e.target.value)}>
                                <OrderInputOptions />
                            </select>
                        </div>
                        <div class="form-group">
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
                        
                    </div>
                    <button class="btn btn-primary" onClick={createOrderCosmetic}>Insert</button>
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <OrderCosmeticsTable orderCosmetics={orderCosmetics} onDelete={deleteOrderCosmetic} />

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

export default OrderCosmetics;