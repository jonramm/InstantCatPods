import React from "react";

import homeIcon from '../images/homeicon.png'

function HomePage() {

    return (
        <>
            <div class="page-header">
                <img src={homeIcon} />
                    <h1>Welcome to the Instant Cat Pods Database Management Website!</h1>
                    <h2>What would you like to do?</h2>
            </div>
            <div class="list-container">
                <ul class="options-list">
                    <li><a href="./users.html">View/Add/Edit/Delete Users</a></li>
                    <li><a href="./avatars.html">View/Add/Edit/Delete Avatars</a></li>
                    <li><a href="./orders.html">View/Add/Edit/Delete Orders</a></li>
                    <li><a href="./cosmetics.html">View/Add/Edit/Delete Cosmetics</a></li>
                </ul>

            </div>
        </>
    )
}

export default HomePage;