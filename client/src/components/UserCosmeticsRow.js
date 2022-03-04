import React from "react";

function UserCosmeticsRow({ userCosmetic, onDelete }) {

    return (
        <>
            <tr>
                <td>{userCosmetic.id}</td>
                <td>{userCosmetic.description}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(userCosmetic.id, userCosmetic.asset_id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default UserCosmeticsRow;