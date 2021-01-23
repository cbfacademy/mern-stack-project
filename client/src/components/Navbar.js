import React from "react";
// import { MenuItems } from "./MenuItems";
import "../stylesheets/Navbar.css";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    label: "Opportunities",
    url: "/opportunities",
    cName: "nav-links",
  },
  {
    label: "About",
    url: "/about",
    cName: "nav-links",
  },
  {
    label: "Dashboard",
    url: "/dashboard",
    cName: "nav-links",
  },
  {
    label: "Login",
    url: "/login",
    cName: "nav-links",
  },
  {
    label: "Logout",
    url: "/login",
    cName: "nav-links",
  },
  {
    label: "Become a Client",
    url: "/signup",
    cName: "nav-links-mobile",
  },
];

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const navbarItems = MenuItems.filter((item) => {
      if (!this.props.token && item.label === "Dashboard") {
        return false;
      }
      return true;
    });

    // const loginLogout = MenuItems.filter((item) => {
    //   if (!this.props.token && item.label === "Logout") {
    //   return false;
    //   }
    //   return true;
    // });

    return (
      <nav className="navbar-items">
        <Link to="/">
          <h1 className="navbar-logo">Experience</h1>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navbarItems.map((items, index) => {
            return (
              <li key={index}>
                <Link to={items.url} className={items.cName}>
                  {items.label}
                </Link>
                {/* <a className={items.cName} href={items.url}>
                  {items.label}
                </a> */}
              </li>
            );
          })}
        </ul>
        <Link to="/signup">
          <button
            className={this.state.clicked ? "nav-button active" : "nav-button"}
          >
            Become a Client
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
