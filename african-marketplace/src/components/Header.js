import React from "react";

function Header() {
  return (
    <nav className="header-container">
      <div className="top-nav">
        <h2>africanMarkeplace</h2>
      </div>

      <div className="bottom-nav">
          <ul>
              <li>PRODUCTS</li>
              <li>SELL</li>
              <li>MY ADS</li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;
