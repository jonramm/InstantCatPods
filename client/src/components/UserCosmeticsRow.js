import React from "react";

function UserCosmeticsRow({ userCosmetic }) {

    return (
        <>
            {console.log(userCosmetic)}
            <tr>
                <td>{userCosmetic.id}</td>
                <td>{userCosmetic.description}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default UserCosmeticsRow;