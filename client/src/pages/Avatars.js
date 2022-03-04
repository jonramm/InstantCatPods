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

    console.log(avatars)

    const navigate = useNavigate()

    const loadAvatars = async () => {
        // function for retrieving avatars from db
        const response = await fetch('/retrieve/avatars');
        const data = await response.json();
        setAvatars(data);
    }

    const clearFields = () => {
        setUserId()
        setName('')
    }

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

    const editAvatar = async avatarToEdit => {
        setAvatarToEdit(avatarToEdit)
        navigate('/edit-avatar')
    }

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
            <>
                <img src={avatarsIcon} alt="avatar icon"/>
                <h1>Avatars</h1>
                <div className="container instructions table-dark bg-dark">
                <h3>Add new avatar or search existing avatars</h3>
            </div>
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
                    <button class="btn btn-primary" onClick={createAvatar}>Insert</button>
                    <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
                </form>

                <AvatarsTable avatars={avatars} onDelete={deleteAvatar} onEdit={editAvatar} />
            </>
        </>
    )
}

export default Avatars;