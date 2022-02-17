import { React, useEffect } from "react";
import { useState } from 'react';

function UserInputOptions() {

    const [users, setUsers] = useState([])
    
    const loadUsers = async () => {
        const users = [{first_name: "John",
                      last_name: "Doe"},
                      {first_name: "Jane",
                      last_name: "Doe"}]
        for (const obj of users) {
            setUsers(arr => [...arr, obj])
        }
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <>
            {users.map((user, key) => (<option id={key}>{user.first_name} {user.last_name}</option>))}
        </>
    )
}

export default UserInputOptions;