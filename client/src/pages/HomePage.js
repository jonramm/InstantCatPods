import React from "react";
import { Link } from "react-router-dom";

import homeIcon from '../images/homeicon.png'

// Homepage with links to each main page.  
function HomePage() {

    return (
        <>
            <main class="container app bg-dark text-white">
            <div class="page-header">
                <img src={homeIcon} alt="home icon" />
                    <h1>Welcome to the Instant Cat Pods Database Management Website!</h1>
                    <h2>What would you like to do?</h2>
            </div>
            <div class="list-container">
                <ul class="options-list">
                    <li><Link to="/users">View/Add/Edit/Delete Users</Link></li>
                    <li><Link to="/avatars">View/Add/Edit/Delete Avatars</Link></li>
                    <li><Link to="/orders">View/Add/Edit/Delete Orders</Link></li>
                    <li><Link to="/cosmetics">View/Add/Edit/Delete Cosmetics</Link></li>
                </ul>

            </div>
            </main>
        </>
    )
}

export default HomePage;