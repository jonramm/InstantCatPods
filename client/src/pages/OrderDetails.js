import { React, useEffect } from "react";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import cloneDeep from 'lodash/cloneDeep';
import CosmeticLi from "../components/CosmeticLi";
import CosmeticInputOptions from "../components/CosmeticInputOptions";

function OrderDetails() {

    

    const [cosmetic, setCosmetic] = useState('')
    const [components, setComponents] = useState([]); 


    const location = useLocation()
    const { user, order_date, total, status } = location.state

    function addCosmetic() {
        setComponents([...components, cosmetic]) 
    }

    function removeCosmetic(i, name) {
        console.log(components)
        console.log(i)
    
        // let arr = components.splice(i, 1)
        // setComponents((components) => components.splice(i, 1))
        // console.log(components)

        console.log(name)

        let arr = components.filter((item) => item !== name)
        setComponents(arr)

       };

    return (
        <>
            {console.log(components)}
            <div className='row'>
            <div class="card col">
                <div class="card-header">
                    Order
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{user}</li>
                    <li class="list-group-item">{order_date}</li>
                    <li class="list-group-item">{total}</li>
                    <li class="list-group-item">{status}</li>
                    {/* {components.map((item, i) => ( <CosmeticLi cosmetic={item} /> ))}  */}
                    {components.map((item, i) => ( 
                        <li>{item} <button class="btn btn-primary" onClick={() => removeCosmetic(i, item)}>Delete</button></li> ))} 
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
            </div>
            </div>
        </>
    )
}

export default OrderDetails;