import React, { useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import usersIcon from '../images/usersicon.png';
import UsersTable from "../components/UsersTable";

function Users() {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [screen_name, setScreenName] = useState('')
    const [dob, setDob] = useState('')
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const response = await fetch('/retrieve/users');
        const data = await response.json();
        setUsers(data);
    }

    const clearFields = () => {
        setFirstName('')
        setLastName('')
        setScreenName('')
        setDob('')
    }

    const createUser = async (e) => {
        e.preventDefault();
        const newUser = { first_name, last_name, screen_name, dob };
        if (first_name && last_name && screen_name && dob) {
            const response = await fetch('/create/users', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Successfully added the user!')
                clearFields();
                loadUsers();
            } else {
                alert(`Failed to add user, status code = ${response.status}.`)
                clearFields();
            }
        } else {
            alert('Please fill out all fields')
        }
    }

    const deleteUser = async id => {
        const response = await fetch(`/destroy/users/${id}`, { method: 'DELETE' });
        if (response.status === 200) {
            alert('Successfully deleted the user!')
            loadUsers()
        } else {
            alert(`Failed to delete user, status code = ${response.status}.`)
        }
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <>
            <img src={usersIcon} alt="users icon" />
            <h1>Users</h1>
            <div className="container instructions table-dark bg-dark">
                <h3>Add new user or search existing users</h3>
            </div>
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
                <button class="btn btn-primary" onClick={createUser}>Insert</button>
                <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
            </form>

            <UsersTable users={users} onDelete={deleteUser} />

            <div class="links-container">

                <button type="button" class="btn btn-secondary">
                    <Link class="relationship-links" to="/user-cosmetics">User Cosmetics</Link>
                </button>
            </div>
        </>
    )
}

export default Users;