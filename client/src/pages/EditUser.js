import React, { useEffect } from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import usersIcon from '../images/usersicon.png';

function EditUser( {userToEdit} ) {

    const [first_name, setFirstName] = useState(userToEdit.first_name)
    const [last_name, setLastName] = useState(userToEdit.last_name)
    const [screen_name, setScreenName] = useState(userToEdit.screen_name)
    const [dob, setDob] = useState(userToEdit.dob)
    const [id, setId] = useState(userToEdit.id)

    const navigate = useNavigate()

    const editUser = async (e) => {
        e.preventDefault();
        const newUser = { first_name, last_name, screen_name, dob };
        const response = await fetch(`/update/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert('Successfully edited the user!')
            navigate('/users')
        } else {
            alert(`Failed to edit user, status code = ${response.status}.`)
            navigate('/users')
        }
    }    

    return (
        <>
            <img src={usersIcon} alt="users icon" />
            <h1>Edit User</h1>
            <form>
                <div class="form-input">
                    <div class="form-group">
                        <label for="first_name">First Name: </label>
                        <input class="form-control"
                            type="text"
                            id="first_name"
                            value={first_name}
                            onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="last_name">Last Name: </label>
                        <input class="form-control"
                            type="text"
                            id="last_name"
                            value={last_name}
                            onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="screen_name">Screen Name: </label>
                        <input class="form-control"
                            type="text"
                            id="screen_name"
                            value={screen_name}
                            onChange={e => setScreenName(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="dob">Date of Birth: </label>
                        <input class="form-control"
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={e => setDob(e.target.value)} />
                    </div>
                </div>
                <button class="btn btn-primary" onClick={editUser}>Submit Changes</button>
            </form>
        </>
    )
}

export default EditUser;