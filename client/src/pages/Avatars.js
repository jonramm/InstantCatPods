import { React, useEffect } from "react";
import { useState } from 'react';
import avatarsIcon from '../images/avatarsicon.png';
import AvatarsTable from "../components/AvatarsTable";
import UserInputOptions from "../components/UserInputOptions";
import { useNavigate } from "react-router-dom";

function Avatars({ setAvatarToEdit }) {

    const [user_id, setUserId] = useState()
    const [name, setName] = useState('')
    const [avatars, setAvatars] = useState([])

    const navigate = useNavigate()

    // Function to filter Avatars by data in form. Corresponds to requests in routes/retrive.js
    const filterAvatars = async (e) => {
        e.preventDefault();
        const searchFilters = { name, user_id }
        const response = await fetch('/retrieve/avatars-filter', {
            method: 'POST',
            body: JSON.stringify(searchFilters),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setAvatars(data);
    }

    const loadAvatars = async () => {
        // function for retrieving avatars from db - references routes/retrieve.js
        const response = await fetch('/retrieve/avatars');
        const data = await response.json();
        setAvatars(data);
    }

    const clearFields = () => {
        setUserId()
        setName('')
    }

    // For Avatar Insertions using routes/create.js
    const createAvatar = async (e) => {
        e.preventDefault();
        const newUser = { name, user_id };
        if (name) {
            const response = await fetch('/create/avatars', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Successfully added the avatar!')
                clearFields();
                loadAvatars();
            } else {
                alert(`Failed to add avatar, status code = ${response.status}.`)
                clearFields();
            }
        } else {
            alert('Please fill out name field')
        }
    }

    // UPDATE function references routes/update.js requests
    const editAvatar = async avatarToEdit => {
        setAvatarToEdit(avatarToEdit)
        navigate(`/edit-avatar`)
    }

    // Delete avatars via routes/destroy.js
    const deleteAvatar = async id => {
        const response = await fetch(`/destroy/avatars/${id}`, { method: 'DELETE' });
        if (response.status === 200) {
            alert('Successfully deleted the user!')
            loadAvatars()
        } else {
            alert(`Failed to delete user, status code = ${response.status}.`)
        }
    }

    useEffect(() => {
        loadAvatars();
    }, [])

    return (
        <>
            <img src={avatarsIcon} alt="avatar icon" />
            <h1 className="title-header">Avatars</h1>
            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="container instructions table-dark bg-dark">
                        <h3>Add a new avatar or filter existing avatars. Enter data into the fields
                            and click 'Add Avatar' to submit it to the database, or click 'Filter Results'
                            to display database rows that match specified criteria. Click 'Reset Results'
                            to clear criteria and refresh the results.</h3>
                    </div>
                </div>

                <div className="col-6">
                    <form>
                        <div class="form-input">
                            <div class="form-group">
                                <label for="user">User Name: </label>
                                <select class="form-control"
                                    type="text"
                                    id="user"
                                    value={user_id}
                                    onChange={e => setUserId(e.target.value)}>
                                    <option>--please select a user--</option>
                                    <option value=''>-None-</option>
                                    <UserInputOptions />
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="avatar_name">Avatar Name: </label>
                                <input class="form-control"
                                    type="text"
                                    id="avatar_name"
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <button class="btn btn-primary" onClick={createAvatar}>Add Avatar</button>
                        <button class="btn btn-primary" onClick={filterAvatars} name="search_btn">Filter Avatars</button>
                        <button class="btn btn-primary" onClick={loadAvatars} name="reset">Reset Results</button>
                    </form>
                </div>
            </div>

            <AvatarsTable avatars={avatars} onDelete={deleteAvatar} onEdit={editAvatar} />
        </>
    )
}

export default Avatars;