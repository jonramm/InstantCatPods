import React from "react";
import UsersRow from "./UsersRow";

function UsersTable({ users, onDelete, onEdit }) {

    return (
        <>
            <div className="table-border">
                <table class="table table-dark table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Screen Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (<UsersRow user={user} onDelete={onDelete} onEdit={onEdit} key={i} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UsersTable;