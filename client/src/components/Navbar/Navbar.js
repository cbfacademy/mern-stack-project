import React from "react";
import { MenuItems } from "./MenuItems";
import "../../stylesheets/Navbar.css";
import { Button } from "../Button";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">Experience</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a className={items.cName} href={items.url}>
                  {items.label}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Become a Client</Button>
      </nav>
    );
  }
}

export default Navbar;
