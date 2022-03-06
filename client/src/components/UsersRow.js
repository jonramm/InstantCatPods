import React from "react";

function UsersRow({ user, onDelete, onEdit }) {

    const month = user.dob.slice(5, 7)
    const day = user.dob.slice(8, 10)
    const year = user.dob.slice(0, 4)

    return (
        <>
            <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.screen_name}</td>
                <td>{month + ' / ' + day + ' / ' + year}</td>
                <td class="td-button"><button onClick={() => onEdit(user)} class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(user.id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default UsersRow;