import React, { useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import usersIcon from '../images/usersicon.png';
import UsersTable from "../components/UsersTable";

function Users() {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [screen_name, setScreenName] = useState('')
    const [date, setDate] = useState('')
    const [users, setUsers] = useState([])

    const addUser = async () => {
        // function for adding User to db
        alert('user to be added to database')
    }

    // const loadUsers = async () => {
    //     // function for retrieving users from db
    //     const users = {
    //         user_id: 1,
    //         first_name: "John",
    //         last_name: "Doe",
    //         screen_name: "jdoe",
    //         dob: "1/1/11"
    //     }
    //     setUsers([users])
    // }

    const loadUsers = async () => {
        const response = await fetch('/retrieve/users');
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <>
            <img src={usersIcon} alt="users icon" />
            <h1>Users</h1>
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
                        <label for="date">Date of Birth: </label>
                        <input class="form-control"
                            type="date"
                            id="date"
                            value={date}
                            onChange={e => setDate(e.target.value)} />
                    </div>
                </div>
                <button class="btn btn-primary" onClick={addUser}>Insert</button>
                <button class="btn btn-primary" name="search_btn" type="submit">Search</button>
            </form>

            <UsersTable users={users} />

            <div class="links-container">

                <button type="button" class="btn btn-secondary">
                    <Link class="relationship-links" to="/user-cosmetics">User Cosmetics</Link>
                </button>
            </div>
        </>
    )
}

export default Users;