import React from "react";

function OrdersRow({ order, onDelete, onEdit }) {

    return (
        <>
            <tr>
                <td>{order.id}</td>
                <td>{order.last_name}</td>
                <td>{order.order_date}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td class="td-button"><button onClick={() => onEdit(order)} class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(order.id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default OrdersRow;