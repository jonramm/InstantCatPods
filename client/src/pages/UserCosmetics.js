import { React, useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import usersIcon from '../images/usersicon.png';
import heart from '../images/heart.gif'
import cosmeticsIcon from '../images/cosmeticsicon.png'
import UserCosmeticsTable from "../components/UserCosmeticsTable";
import UserInputOptions from "../components/UserInputOptions";
import CosmeticInputOptions from "../components/CosmeticInputOptions";

function UserCosmetics() {

    const [user_id, setUser] = useState('')
    const [cosmetic, setCosmetic] = useState('')
    const [userCosmetics, setUserCosmetics] = useState([])
	
	// Filter for user-cosmetics.  References routes/retrieve.js for requests
    const filterResults = async (e) => {
        e.preventDefault();
        const searchFilters = { user_id, asset_id: cosmetic }
        if (user_id || cosmetic) {
            const response = await fetch('/retrieve/users-cosmetics-filter', {
                method: 'POST',
                body: JSON.stringify(searchFilters),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setUserCosmetics(data);
        } else {
            loadUserCosmetics()
        }
    }

    const loadUserCosmetics = async () => {
        // function for retrieving user cosmetics from db
        const response = await fetch('/retrieve/users-cosmetics');
        const data = await response.json();
        console.log(data)
        setUserCosmetics(data)
    }

	// INSERT for users-cosmetics.  References routes/create.js
    const createUserCosmetic = async (e) => {
        e.preventDefault();
        const newUserCosmetic = { user_id, cosmetic };
        if (user_id && cosmetic) {
            const response = await fetch('/create/users-cosmetics', {
                method: 'POST',
                body: JSON.stringify(newUserCosmetic),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Successfully added the relationship!!')
                // clearFields();
                loadUserCosmetics();
            } else if (response.status === 519) {
                alert('User-cosmetic relationship already found')
            } else {
                alert(`Failed to add relationship, status code = ${response.status}.`)
                // clearFields();
            }
        } else {
            alert('Please fill out all fields')
        }
    }

	// DELETE for users-cosmetics.  References routes/destroy.js
    const deleteUserCosmetic = async (user_id, asset_id) => {
        const response = await fetch(`/destroy/user-cosmetics/${user_id}/${asset_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            alert('Successfully deleted the order cosmetic!')
            loadUserCosmetics()
        } else {
            alert(`Failed to delete order cosmetic, status code = ${response.status}.`)
        }
    }

    useEffect(() => {
        loadUserCosmetics();
    }, [])

    return (
        <>
            <>
                <img src={usersIcon} alt="users icon" />
                <img src={heart} alt="heart gif" />
                <img src={cosmeticsIcon} alt="cosmetics icon" />
                <h1 className="title-header">User Cosmetics</h1>

                <div className="row justify-content-around">
                    <div className="col-4">
                        <div className="container instructions table-dark bg-dark">
                            <h3>Add a new relationship or filter existing relationships. Enter a user
                                and cosmetic to connect and click 'Add Relationship' to submit it to the database, or
                                click 'Filter Results' to display database rows that match specified criteria.
                                Click 'Reset Results' to clear criteria and refresh the results.</h3>
                        </div>
                    </div>

                    <div className="col-6">
                        <form>
                            <div class="form-input">
                                <div class="form-group">
                                    <label for="user">User: </label>
                                    <select class="form-control"
                                        type="text"
                                        id="user"
                                        value={user_id}
                                        onChange={e => setUser(e.target.value)}>
                                        <option>--please select a user--</option>
                                        <UserInputOptions />
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="cosmetic">Cosmetic: </label>
                                    <select class="form-control"
                                        type="text"
                                        id="cosmetic"
                                        value={cosmetic}
                                        onChange={e => setCosmetic(e.target.value)}>
                                        <option>--please select a cosmetic--</option>
                                        <CosmeticInputOptions />
                                    </select>
                                </div>

                            </div>
                            <button class="btn btn-primary" onClick={createUserCosmetic}>Add Relationship</button>
                            <button class="btn btn-primary" onClick={filterResults} name="search_btn" type="submit">Filter Results</button>
                            <button class="btn btn-primary" onClick={loadUserCosmetics} name="reset">Reset Results</button>
                        </form>
                    </div>
                </div>

                <UserCosmeticsTable userCosmetics={userCosmetics} onDelete={deleteUserCosmetic} />

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

export default UserCosmetics;