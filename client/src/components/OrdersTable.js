import React from "react";
import OrdersRow from "./OrdersRow";

function OrdersTable({ orders }) {

    return (
        <>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, i) => (<OrdersRow order={order} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default OrdersTable;