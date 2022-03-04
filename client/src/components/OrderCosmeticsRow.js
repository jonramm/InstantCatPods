import React from "react";

function OrderCosmeticsRow({ orderCosmetic, onDelete }) {

    return (
        <>
            <tr>
                <td>{orderCosmetic.id}</td>
                <td>{orderCosmetic.description}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(orderCosmetic.id, orderCosmetic.asset_id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default OrderCosmeticsRow;