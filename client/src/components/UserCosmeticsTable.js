import React from "react";
import UserCosmeticsRow from "./UserCosmeticsRow";

function UserCosmeticsTable({ userCosmetics, onDelete }) {

    return (
        <>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Cosmetic</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {userCosmetics.map((userCosmetic, i) => (<UserCosmeticsRow userCosmetic={userCosmetic} onDelete={onDelete} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default UserCosmeticsTable;