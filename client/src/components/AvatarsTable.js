import React from "react";
import AvatarsRow from "./AvatarsRow";

function AvatarsTable({ avatars, onDelete, onEdit }) {

    return (
        <>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Avatar Name</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {avatars.map((avatar, i) => (<AvatarsRow avatar={avatar} onDelete={onDelete} onEdit={onEdit} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default AvatarsTable;