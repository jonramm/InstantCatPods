import React from "react";
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
                        <a href="./index.html" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <img src={catPodLogo} class="logo-image" />
                                <h1>Instant Cat Pods</h1>
                        </a>

                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="/" class="nav-link text-secondary">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={homeIcon} />
                                        Home
                                </a>
                            </li>
                            <li>
                                <a href="/users" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={userIcon} />
                                        Users
                                </a>
                            </li>
                            <li>
                                <a href="/avatars" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={avatarIcon} />
                                        Avatars
                                </a>
                            </li>
                            <li>
                                <a href="/cosmetics" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={cosmeticIcon} />
                                        Cosmetics
                                </a>
                            </li>
                            <li>
                                <a href="/orders" class="nav-link text-white">
                                    <img class="bi d-block mx-auto mb-1" width="24" height="24" src={orderIcon} />
                                        Orders
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;