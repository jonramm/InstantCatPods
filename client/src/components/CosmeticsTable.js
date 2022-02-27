import React from "react";
import CosmeticsRow from "./CosmeticsRow";

function CosmeticsTable({ cosmetics, onDelete }) {

    return (
        <>
        {console.log(cosmetics)}
            <table class="table table-dark">
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
                    {cosmetics.map((cosmetic, i) => (<CosmeticsRow cosmetic={cosmetic} onDelete={onDelete} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default CosmeticsTable;