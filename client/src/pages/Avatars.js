import { React, useEffect } from "react";
import { useState } from 'react';
import avatarsIcon from '../images/avatarsicon.png';
import AvatarsTable from "../components/AvatarsTable";
import UserInputOptions from "../components/UserInputOptions";

function Avatars() {

    const [user_name, setUserName] = useState('')
    const [avatar_name, setAvatarName] = useState('')
    const [avatars, setAvatars] = useState([])

    const loadAvatars = async () => {
        // function for retrieving avatars from db
        const response = await fetch('/retrieve/avatars');
        const data = await response.json();
        setAvatars(data);
    }

    const addAvatar = async () => {
        // function for adding an order to db
        alert('Adding avatar...')
    }

    useEffect(() => {
        loadAvatars();
    }, [])

    return (
        <>
            <>
                <img src={avatarsIcon} alt="avatar icon"/>
                <h1>Avatars</h1>
                <form>
                    <div class="form-input">
                        <div class="form-group">
                            <label for="user">User Name: </label>
                            <select class="form-control"
                                type="text"
                                id="user"
                                value={user_name}
                                onChange={e => setUserName(e.target.value)}>
                                <option>--please select a user--</option>
                                <option>-None-</option>
                                <UserInputOptions />
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="avatar_name">Avatar Name: </label>
                            <input class="form-control"
                                type="text"
                                id="avatar_name"
                                value={avatar_name}
                                onChange={e => setAvatarName(e.target.value)} />
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={addAvatar}>Insert</button>
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <AvatarsTable avatars={avatars} />
            </>
        </>
    )
}

export default Avatars;