import React from "react";

function AvatarsRow({ avatar, onDelete, onEdit }) {

    let name = ''

    if (avatar.first_name !== null) {
        name = avatar.first_name + ' ' + avatar.last_name
    }

    return (
        <>
            <tr>
                <td>{avatar.id}</td>
                <td>{name}</td>
                <td>{avatar.name}</td>
                <td class="td-button"><button onClick={() => {onEdit(avatar)}} class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(avatar.id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default AvatarsRow;