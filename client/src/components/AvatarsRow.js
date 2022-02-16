import React from "react";

function AvatarsRow({ avatar }) {

    return (
        <>
            {console.log(avatar)}
            <tr>
                <td>{avatar.avatar_id}</td>
                <td>{avatar.user_name}</td>
                <td>{avatar.avatar_name}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default AvatarsRow;