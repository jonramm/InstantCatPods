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

    const [order, setOrder] = useState('')
    const [cosmetic, setCosmetic] = useState('')
    const [orderCosmetics, setOrderCosmetics] = useState([])

    const loadOrderCosmetics = async () => {
        // function for retrieving order cosmetics from db
        const response = await fetch('/retrieve/orders-cosmetics');
        const data = await response.json();
        setOrderCosmetics(data)
    }

    const addOrderCosmetic = async () => {
        // function for adding an order cosmetic to db
        alert('Adding order...')
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
                <h1>Order Cosmetics</h1>
                <div className="container instructions table-dark bg-dark">
                    <h3>Add cosmetics to orders</h3>
                </div>
                <form>
                    <div class="form-input">
                        <div class="form-group">
                            <label for="order">Order: </label>
                            <select class="form-control"
                                type="number"
                                id="order"
                                value={order}
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
                    <button class="btn btn-primary" onClick={addOrderCosmetic}>Insert</button>
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <OrderCosmeticsTable orderCosmetics={orderCosmetics} />

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