import React from "react";
import ItemsRow from "./ItemsRow";

function ItemsTable({ orderItems }) {

    return (
        <>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Items</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItems.map((item, i) => (<ItemsRow item={item} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default ItemsTable;

