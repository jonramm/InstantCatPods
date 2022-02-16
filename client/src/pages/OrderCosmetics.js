import { React, useEffect } from "react";
import { useState } from 'react';
import ordersIcon from '../images/ordersicon.png';
import heart from '../images/heart.gif'
import cosmeticsIcon from '../images/cosmeticsicon.png'
import OrderCosmeticsTable from "../components/OrderCosmeticsTable";

function OrderCosmetics() {

    const [order, setOrder] = useState('')
    const [cosmetic, setCosmetic] = useState('')
    const [orderCosmetics, setOrderCosmetics] = useState([])

    const loadOrderCosmetics = async () => {
        // function for retrieving order cosmetics from db
        const orders = {
            order: 1,
            cosmetic: 2
        }
        setOrderCosmetics([orders])
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
                <form>
                    <div class="form-input">
                        <div class="form-group">
                            <label for="order">Order: </label>
                            <select class="form-control"
                                type="number"
                                id="order"
                                value={order}
                                onChange={e => setOrder(e.target.value)}>
                                <option>1</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="cosmetic">Cosmetic: </label>
                            <select class="form-control"
                                type="text"
                                id="cosmetic"
                                value={cosmetic}
                                onChange={e => setCosmetic(e.target.value)}>
                                <option>Viking Horns</option>
                            </select>
                        </div>
                        
                    </div>
                    <button class="btn btn-primary" onClick={addOrderCosmetic}>Insert</button>
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <OrderCosmeticsTable orderCosmetics={orderCosmetics} />

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

export default OrderCosmetics;