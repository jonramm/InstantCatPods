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
        const response = await fetch('/retrieve/cosmetics');
        const data = await response.json();
        setCosmetics(data)
    }

    const clearFields = () => {
        setDescription('')
        setType('')
        setPrice()
    }

    const createCosmetic = async (e) => {
        e.preventDefault();
        const newCosmetic = { description, type, price };
        if (description && type && price) {
            const response = await fetch('/create/cosmetics', {
                method: 'POST',
                body: JSON.stringify(newCosmetic),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Successfully added the cosmetic!')
                clearFields();
                loadCosmetics();
            } else {
                alert(`Failed to add cosmetic, status code = ${response.status}.`)
                clearFields();
            }
        } else {
            alert('Please fill out all fields')
        }
    }

    useEffect(() => {
        loadCosmetics();
    }, [])

    return (
        <>

            <img src={cosmeticsIcon} alt="cosmetics icon"/>
            <h1>Cosmetics</h1>
            <div className="container instructions table-dark bg-dark">
                <h3>Add new cosmetic or search existing cosmetics</h3>
            </div>
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
                        <select class="form-control"
                            type="text"
                            id="type"
                            value={type}
                            onChange={e => setType(e.target.value)}>
                            <option value=''>--please select a type--</option>
                            <option>Head Gear</option>
                            <option>Torso Gear</option>
                            <option>Feet Gear</option>
                        </select>   
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
                <button class="btn btn-primary" onClick={createCosmetic}>Insert</button>
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