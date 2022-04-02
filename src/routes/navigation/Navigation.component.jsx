import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo"><CrownLogo className="logo"/></div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">SIGN IN</Link>
          <Link className="nav-link" to=""></Link>
          <Link className="nav-link" to=""></Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
