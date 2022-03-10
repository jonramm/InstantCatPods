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
	
	// Filter for order-cosmetics.  References routes/retrieve.js for requests
    const filterResults = async (e) => {
        e.preventDefault();
        const searchFilters = { order_id, asset_id: cosmetic }
        if (order_id || cosmetic) {
            const response = await fetch('/retrieve/orders-cosmetics-filter', {
                method: 'POST',
                body: JSON.stringify(searchFilters),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setOrderCosmetics(data);
        } else {
            loadOrderCosmetics()
        }
    }
	
	// INSERT for orders-cosmetics.  References routes/create.js
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
                loadOrderCosmetics();
            } else {
                alert(`Failed to add relationship, status code = ${response.status}.`)
            }
        } else {
            alert('Please fill out all fields')
        }
    }
	
	// DELETE for orders-cosmetics.  References routes/destroy.js
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
            {console.log(orderCosmetics)}
            <>
                <img src={ordersIcon} alt="orders icon" />
                <img src={heart} alt="heart gif" />
                <img src={cosmeticsIcon} alt="cosmetics icon" />
                <h1 className="title-header">Order Cosmetics</h1>
                <div className="row justify-content-around">
                    <div className="col-4">
                        <div className="container instructions table-dark bg-dark">
                            <h3>Add a new relationship or filter existing relationships. Enter an order 
                            and cosmetic to connect and click 'Add Relationship' to submit it to the database, or 
                            click 'Filter Results' to display database rows that match specified criteria. 
                            Click 'Reset Results' to clear criteria and refresh the results.</h3>
                        </div>
                    </div>

                    <div className="col-6">
                        <form>
                            <div class="form-input">
                                <div class="form-group">
                                    <label for="order">Order Id: </label>
                                    <select class="form-control"
                                        type="number"
                                        id="order"
                                        value={order_id}
                                        onChange={e => setOrder(e.target.value)}>
                                        <option>--please enter an order id--</option>
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
                            <button class="btn btn-primary" onClick={createOrderCosmetic}>Add Relationship</button>
                            <button class="btn btn-primary" onClick={filterResults} name="search_btn" type="submit">Filter Results</button>
                            <button class="btn btn-primary" onClick={loadOrderCosmetics} name="reset">Reset Results</button>
                        </form>
                    </div>
                </div>

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