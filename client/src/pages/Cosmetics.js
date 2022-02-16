import { React, useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import cosmeticsIcon from '../images/cosmeticsicon.png';
import CosmeticsTable from "../components/CosmeticsTable";

function Cosmetics() {

    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState()
    const [cosmetics, setCosmetics] = useState([])

    const loadCosmetics = async () => {
        // function for retrieving cosmetics from db
        const cosmetics = {
            asset_id: 1,
            description: "Viking Horns",
            type: "Hat",
            price: 2.99,
        }
        setCosmetics([cosmetics])
    }

    const addCosmetic = async () => {
        // function for adding a cosmetic to db
        alert('Adding avatar...')
    }

    useEffect(() => {
        loadCosmetics();
    }, [])

    return (
        <>

            <img src={cosmeticsIcon} alt="cosmetics icon"/>
            <h1>Cosmetics</h1>
            <form>
                <div class="form-input">
                    <div class="form-group">
                        <label for="description">Description: </label>
                        <input class="form-control"
                            type="text"
                            id="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="type">Type: </label>
                        <input class="form-control"
                            type="text"
                            id="type"
                            value={type}
                            onChange={e => setType(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="price">Price: </label>
                        <input class="form-control"
                            type="number"
                            step="any"
                            id="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                </div>
                <button class="btn btn-primary" onClick={addCosmetic}>Insert</button>
                <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
            </form>

            <CosmeticsTable cosmetics={cosmetics} />

            <div class="links-container">
                    <button type="button" class="btn btn-secondary">
                        <Link class="relationship-links" to="/order-cosmetics"> Order Cosmetics</Link>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        <Link class="relationship-links" to="/user-cosmetics">User Cosmetics</Link>
                    </button>
                </div>

        </>
    )
}

export default Cosmetics;