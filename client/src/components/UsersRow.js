import React from "react";

function UsersRow({ user, onDelete }) {

    return (
        <>
            <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.screen_name}</td>
                <td>{user.dob}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(user.id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default UsersRow;