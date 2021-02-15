import React, { Component } from "react";
import { MenuItems, MenuInfo } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="NavbarInfo">
          <ul className="nav-menu-info">
            {MenuInfo.map((item, index) => {
              return (
                <li className={item.cName} key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
            <li>
              <a className="fas fa-question-circle nav-links-info icon"></a>
            </li>
            <li>
              <a className="fas fa-phone-alt nav-links-info icon"></a>
            </li>
          </ul>
        </nav>
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
