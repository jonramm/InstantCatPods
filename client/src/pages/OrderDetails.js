import { React, useEffect } from "react";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import orderDetailsIcon from '../images/orderdetailsicon.png'
import CosmeticInputOptions from "../components/CosmeticInputOptions";

function OrderDetails() {

    

    const [cosmetic, setCosmetic] = useState('')
    const [components, setComponents] = useState([]); 


    const location = useLocation()
    const { user, order_date, total, status } = location.state

    const addOrder = async () => {
        // function for adding an order to db
        alert('Adding order...')
    }

    function addCosmetic() {
        if (components.indexOf(cosmetic) === -1) {
            setComponents([...components, cosmetic])
        }
    }

    function removeCosmetic(i, name) {
        let arr = components.filter((item) => item !== name)
        setComponents(arr)
       };

    return (
        <>
            <img src={orderDetailsIcon} alt="order details icon"/>
            <h1>Order Details</h1>
            <div className='row order-details-row'>
            <div class="card col">
                <div class="card-header">
                    Order Details
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>User:</strong> {user}</li>
                    <li class="list-group-item"><strong>Order Date:</strong> {order_date}</li>
                    <li class="list-group-item"><strong>Total:</strong> ${total}</li>
                    <li class="list-group-item"><strong>Status:</strong> {status}</li>
                    <div class="card-header">
                    Cosmetics:
                    </div>
                    {/* {components.map((item, i) => ( <CosmeticLi cosmetic={item} /> ))}  */}
                    {components.map((item, i) => ( 
                        <li class="list-group-item">{item} 
                            <button class="btn btn-primary" onClick={() => removeCosmetic(i, item)}>Delete</button>
                        </li> ))} 
                </ul>
            </div>

            <div className='col'>
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
            <button class="btn btn-primary" onClick={addOrder}>Insert Order</button>
            </div>
            </div>
            
        </>
    )
}

export default OrderDetails;