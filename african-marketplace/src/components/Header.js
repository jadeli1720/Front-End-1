import React from "react";
import { Link } from "react-router-dom";

function Header() {

  const logout = () => {
    window.localStorage.removeItem('token')
  }

  return (
    <nav className="header-container">
      <div className="bottom-nav">
          <ul>
              <li><Link to="/dashboard">PRODUCTS</Link></li>
              <li>SELL</li>
              <li>MY ADS</li>
              <li onClick={logout}><Link to="/">LOG OUT</Link></li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;
