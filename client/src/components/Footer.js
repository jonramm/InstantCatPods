import React from "react";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; 2022 ICP</p>
      
          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <h3>Instant Cat Pods</h3>
          </a>
      
          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
            <li class="nav-item"><Link to="/users" class="nav-link px-2 text-muted">Users</Link></li>
            <li class="nav-item"><Link to="/avatars" class="nav-link px-2 text-muted">Avatars</Link></li>
            <li class="nav-item"><Link to="/cosmetics" class="nav-link px-2 text-muted">Cosmetics</Link></li>
            <li class="nav-item"><Link to="/orders" class="nav-link px-2 text-muted">Orders</Link></li>
          </ul>
        </footer>
      </div>
    )
}

export default Footer;