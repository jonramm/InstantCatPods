import { React, useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import cosmeticsIcon from '../images/cosmeticsicon.png';
import CosmeticsTable from "../components/CosmeticsTable";
import { useNavigate } from "react-router-dom";

function Cosmetics({ setCosmeticToEdit }) {

    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState()
    const [cosmetics, setCosmetics] = useState([])

    const navigate = useNavigate()

    const filterCosmetics = async (e) => {
        e.preventDefault();
        const searchFilters = { description, type, price }
        if (description || type || price) {
            const response = await fetch('/retrieve/cosmetics-filter', {
                method: 'POST',
                body: JSON.stringify(searchFilters),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setCosmetics(data);
        } else {
            loadCosmetics()
        }
    }

    const loadCosmetics = async () => {
        // function for retrieving cosmetics from db
        const response = await fetch('/retrieve/cosmetics');
        const data = await response.json();
        setCosmetics(data)
    }

    const clearFields = () => {
        setDescription('')
        setType('')
        setPrice('')
    }

    const createCosmetic = async (e) => {
        e.preventDefault();
        const newCosmetic = { description, type, price };
        if (description && type && price) {
            if (price > 0) {
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
                alert('Please enter a non-negative price')
            }
        } else {
            alert('Please fill out all fields')
        }
    }

    const editCosmetic = async cosmeticToEdit => {
        setCosmeticToEdit(cosmeticToEdit)
        navigate('/edit-cosmetic')
    }

    const deleteCosmetic = async id => {
        const response = await fetch(`/destroy/cosmetics/${id}`, { method: 'DELETE' });
        if (response.status === 200) {
            alert('Successfully deleted the cosmetic!')
            loadCosmetics()
        } else {
            alert(`Failed to delete cosmetic, status code = ${response.status}.`)
        }
    }

    useEffect(() => {
        loadCosmetics();
    }, [])

    return (
        <>
            {console.log(price)}
            <img src={cosmeticsIcon} alt="cosmetics icon" />
            <h1 className="title-header">Cosmetics</h1>

            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="container instructions table-dark bg-dark">
                        <h3>Add a new cosmetic or filter existing cosmetics. Enter data into the fields
                            and click 'Add Cosmetic' to submit it to the database, or click 'Filter Results'
                            to display database rows that match specified criteria. Click 'Reset Results'
                            to clear criteria and refresh the results.</h3>
                    </div>
                </div>

                <div className="col-6">
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
                        <button class="btn btn-primary" onClick={createCosmetic}>Add Cosmetic</button>
                        <button class="btn btn-primary" onClick={filterCosmetics} name="search_btn">Filter Cosmetics</button>
                        <button class="btn btn-primary" onClick={loadCosmetics} name="reset">Reset Results</button>
                    </form>
                </div>
            </div>

            <CosmeticsTable cosmetics={cosmetics} onDelete={deleteCosmetic} onEdit={editCosmetic} />

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