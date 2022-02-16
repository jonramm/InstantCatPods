import React from "react";

function OrdersRow({ order }) {

    return (
        <>
            {console.log(order)}
            <tr>
                <td>{order.order_id}</td>
                <td>{order.user}</td>
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