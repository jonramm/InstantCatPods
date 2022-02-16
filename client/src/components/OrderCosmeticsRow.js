import React from "react";

function OrderCosmeticsRow({ orderCosmetic }) {

    return (
        <>
            {console.log(orderCosmetic)}
            <tr>
                <td>{orderCosmetic.order}</td>
                <td>{orderCosmetic.cosmetic}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default OrderCosmeticsRow;