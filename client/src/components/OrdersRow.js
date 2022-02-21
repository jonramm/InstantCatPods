import React from "react";

function OrdersRow({ order }) {

    return (
        <>
            <tr>
                <td>{order.id}</td>
                <td>{order.last_name}</td>
                <td>{order.order_date}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td class="td-button"><button class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default OrdersRow;