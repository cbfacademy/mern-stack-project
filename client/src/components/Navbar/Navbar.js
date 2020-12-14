import React from "react";
import { MenuItems } from "./MenuItems";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarLogo">Experience</h1>
        <div className="menuIcon"></div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.CName} href={item.url}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
