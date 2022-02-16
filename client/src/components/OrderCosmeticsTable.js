import React from "react";
import OrderCosmeticsRow from "./OrderCosmeticsRow";

function OrderCosmeticsTable({ orderCosmetics }) {

    return (
        <>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Cosmetic</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {orderCosmetics.map((orderCosmetic, i) => (<OrderCosmeticsRow orderCosmetic={orderCosmetic} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default OrderCosmeticsTable;