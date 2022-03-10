import React from "react";
import CosmeticsRow from "./CosmeticsRow";

function CosmeticsTable({ cosmetics, onDelete, onEdit }) {

    return (
        <>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {cosmetics.map((cosmetic, i) => (<CosmeticsRow cosmetic={cosmetic} onDelete={onDelete} onEdit={onEdit} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default CosmeticsTable;