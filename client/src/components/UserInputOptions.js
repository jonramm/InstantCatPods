import React from "react";

function UserInputOptions({ users }) {
    {console.log(users)}
    return (
        <>
            {users.map((user, i) => (<option>{user.first_name} {user.last_name}</option>))}
        </>
    )
}

export default UserInputOptions;