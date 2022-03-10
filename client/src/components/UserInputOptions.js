import { React, useEffect } from "react";
import { useState } from 'react';

function UserInputOptions() {

    const [users, setUsers] = useState([])

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
            {users.map((user, key) => (<option value={user.id} id={key}>{user.first_name} {user.last_name}</option>))}
        </>
    )
}

export default UserInputOptions;