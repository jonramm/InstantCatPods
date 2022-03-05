import React from "react";

function OrdersRow({ order, onDelete, onEdit }) {

    const month = order.order_date.slice(5, 7)
    const day = order.order_date.slice(8, 10)
    const year = order.order_date.slice(0, 4)

    return (
        <>
            <tr>
                <td>{order.id}</td>
                <td>{order.first_name + ' ' + order.last_name}</td>
                <td>{month + '-' + day + '-' + year}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
                <td class="td-button"><button onClick={() => onEdit(order)} class="btn btn-primary">Edit</button></td>
                <td class="td-button"><button onClick={() => onDelete(order.id)} class="btn btn-primary">Delete</button></td>
            </tr>
        </>
    )
}

export default OrdersRow;