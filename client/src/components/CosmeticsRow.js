import React from "react";

function CosmeticsRow({ cosmetic, onDelete }) {

    return (
        <>
            {console.log(cosmetic)}
            <tr>
                <td>{cosmetic.id}</td>
                <td>{cosmetic.description}</td>
                <td>{cosmetic.type}</td>
                <td>{cosmetic.price}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(cosmetic.id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default CosmeticsRow;