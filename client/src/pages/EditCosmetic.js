import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import cosmeticsIcon from '../images/cosmeticsicon.png';

// Completes the process of editing Cosmetics table.  References routes/update.js requests
function EditCosmetic({ cosmeticToEdit }) {

    const [description, setDescription] = useState(cosmeticToEdit.description)
    const [type, setType] = useState(cosmeticToEdit.type)
    const [price, setPrice] = useState(cosmeticToEdit.price)
    const [id, setId] = useState(cosmeticToEdit.id)

    const navigate = useNavigate()

    const editCosmetic = async (e) => {
        e.preventDefault();
        const newCosmetic = { description, type, price };
        const response = await fetch(`/update/cosmetics/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newCosmetic),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert('Successfully edited the cosmetic!')
            navigate('/cosmetics')
        } else {
            alert(`Failed to edit cosmetic, status code = ${response.status}.`)
            navigate('/cosmetics')
        }
    }

    return (
        <>
            <img src={cosmeticsIcon} alt="avatars icon" />
            <h1 className="title-header">Edit Cosmetic</h1>
            <form className="form-width">
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
                <button class="btn btn-primary" onClick={editCosmetic}>Submit Changes</button>
            </form>
        </>
    )
}

export default EditCosmetic;