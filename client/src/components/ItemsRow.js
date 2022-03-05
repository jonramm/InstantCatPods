import React from "react";

function ItemsRow({ item }) {

    return (
        <>
            <tr>
                <td>{item.description}</td>
            </tr>
        </>
    )
}

export default ItemsRow;