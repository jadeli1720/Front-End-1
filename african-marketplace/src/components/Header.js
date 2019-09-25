import React from "react";
import { Link } from "react-router-dom";

function Header() {

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userID');
  }

  return (
    <nav className="header-container">
      <div className="bottom-nav">
          <ul>
              <li><Link to="/dashboard">PRODUCTS</Link></li>
              <li><Link to="/sell">SELL</Link></li>
              <li><Link to="/myads">MY ADS</Link></li>
              <li onClick={logout}><Link to="/">LOG OUT</Link></li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;
