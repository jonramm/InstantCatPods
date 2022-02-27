import React from "react";

function AvatarsRow({ avatar, onDelete }) {

    return (
        <>
            {console.log(avatar)}
            <tr>
                <td>{avatar.id}</td>
                <td>{avatar.last_name}</td>
                <td>{avatar.name}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(avatar.id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default AvatarsRow;