import React from "react";
import { useState } from 'react';

function Users() {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [screen_name, setScreenName] = useState('')
    const [date, setDate] = useState('') 

    const addUser = async ()=> {
        // function for adding User to db
        alert('user to be added to database')
    }

    return (
        <>
            <form>
                <label for="first_name">First Name: </label>
                <input 
                    type="text" 
                    id="first_name" 
                    value={first_name}
                    onChange={e => setFirstName(e.target.value)} />
                <label for="last_name">Last Name: </label>
                <input 
                    type="text" 
                    id="last_name" 
                    value={last_name}
                    onChange={e => setLastName(e.target.value)} />
                <label for="screen_name">Screen Name: </label>
                <input 
                    type="text" 
                    id="screen_name" 
                    value={screen_name}
                    onChange={e => setScreenName(e.target.value)} />
                <label for="date">Date of Birth: </label>
                <input 
                    type="date" 
                    id="date" 
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                <button onClick={addUser}>Insert</button>
                <button name="search_btn" type="submit">Search</button>
            </form>
            <h2>Results:</h2>
            <p>Table with Delete / Edit Buttons</p>
        </>
)
}

export default Users;