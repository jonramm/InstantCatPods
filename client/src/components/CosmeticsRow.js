import React from "react";

function CosmeticsRow({ cosmetic }) {

    return (
        <>
            {console.log(cosmetic)}
            <tr>
                <td>{cosmetic.asset_id}</td>
                <td>{cosmetic.description}</td>
                <td>{cosmetic.type}</td>
                <td>{cosmetic.price}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default CosmeticsRow;