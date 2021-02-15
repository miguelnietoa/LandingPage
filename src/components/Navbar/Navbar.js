import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="NavbarInfo"></nav>
        <nav className="NavbarItems">
          <i className="fab fa-react"></i>
          <h1 className="navbar-logo">curata</h1>
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
