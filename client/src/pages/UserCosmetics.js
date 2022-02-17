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

    const [user, setUser] = useState('')
    const [cosmetic, setCosmetic] = useState('')
    const [userCosmetics, setUserCosmetics] = useState([])

    const loadUserCosmetics = async () => {
        // function for retrieving user cosmetics from db
        const users = {
            user: "John Doe",
            cosmetic: "Viking Horns"
        }
        setUserCosmetics([users])
    }

    const addUserCosmetic = async () => {
        // function for adding an user cosmetic to db
        alert('Adding user...')
    }

    useEffect(() => {
        loadUserCosmetics();
    }, [])

    return (
        <>
            <>
                <img src={usersIcon} alt="users icon"/>
                <img src={heart} alt="heart gif"/>
                <img src={cosmeticsIcon} alt="cosmetics icon"/>
                <h1>User Cosmetics</h1>
                <form>
                    <div class="form-input">
                        <div class="form-group">
                            <label for="user">User: </label>
                            <select class="form-control"
                                type="text"
                                id="user"
                                value={user}
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
                    <button class="btn btn-primary" onClick={addUserCosmetic}>Insert</button>
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <UserCosmeticsTable userCosmetics={userCosmetics} />

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