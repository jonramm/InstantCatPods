import React from "react";
import { Link } from "react-router-dom";
import catPodLogo from '../images/CatPodsLogo.png'
import homeIcon from '../images/homeicon.png'
import userIcon from '../images/usersicon.png'
import avatarIcon from '../images/avatarsicon.png'
import cosmeticIcon from '../images/cosmeticsicon.png'
import orderIcon from '../images/ordersicon.png'

function Header() {

    return (
        <header>
            <div class="px-3 py-2 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <img src={catPodLogo} class="logo-image" alt="logo icon" />
                                <h1>Instant Cat Pods</h1>
                        </Link>

                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link to="/" class="nav-link text-secondary">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={homeIcon} alt="home icon" />
                                        Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/users" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={userIcon} alt="user icon" />
                                        Users
                                </Link>
                            </li>
                            <li>
                                <Link to="/avatars" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={avatarIcon} alt="avatar icon" />
                                        Avatars
                                </Link>
                            </li>
                            <li>
                                <Link to="/cosmetics" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={cosmeticIcon} alt="cosmetic icon" />
                                        Cosmetics
                                </Link>
                            </li>
                            <li>
                                <Link to="/orders" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={orderIcon} alt="order icon" />
                                        Orders
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;