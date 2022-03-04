import React, { useEffect } from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import avatarsIcon from '../images/avatarsicon.png';
import UserInputOptions from "../components/UserInputOptions";

function EditAvatar( {avatarToEdit} ) {

    const [name, setName] = useState(avatarToEdit.name)
    const [user_id, setUserId] = useState(avatarToEdit.user_id)
    const [id, setId] = useState(avatarToEdit.id)

    const navigate = useNavigate()

    const editAvatar = async (e) => {
        e.preventDefault();
        const newAvatar = { id, name, user_id };
        const response = await fetch('/update/avatars', {
            method: 'PUT',
            body: JSON.stringify(newAvatar),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert('Successfully edited the avatar!')
            navigate('/avatars')
        } else {
            alert(`Failed to edit avatar, status code = ${response.status}.`)
            navigate('/avatars')
        }
    }    

    return (
        <>
            <img src={avatarsIcon} alt="avatars icon" />
            <h1>Edit Avatar</h1>
            <form>
                <div class="form-input">
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input class="form-control"
                            type="text"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="form-group">
                            <label for="user">User Name: </label>
                            <select class="form-control"
                                type="text"
                                id="user"
                                value={user_id}
                                onChange={e => setUserId(e.target.value)}>
                                <option>{avatarToEdit.last_name}</option>
                                <option value=''>-None-</option>
                                <UserInputOptions />
                            </select>
                        </div>
                </div>
                <button class="btn btn-primary" onClick={editAvatar}>Submit Changes</button>
            </form>
        </>
    )
}

export default EditAvatar;