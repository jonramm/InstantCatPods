import React from "react";
import AvatarsRow from "./AvatarsRow";

function AvatarsTable({ avatars }) {

    return (
        <>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User Last Name</th>
                        <th scope="col">Avatar Name</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {avatars.map((avatar, i) => (<AvatarsRow avatar={avatar} key={i} />))}
                </tbody>
            </table>
        </>
    )
}

export default AvatarsTable;