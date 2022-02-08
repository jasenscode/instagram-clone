import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextLogo from "../../assets/images/Instagram_logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={TextLogo} alt="company-text-logo" className="navbar__logo" />
      <div className="navbar__icons">
        <a href="/#">
          <FontAwesomeIcon icon="home" className="navbar__icon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={["far", "paper-plane"]} className="navbar__icon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={["far", "plus-square"]} className="navbar__icon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={["far", "compass"]} className="navbar__icon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={["far", "heart"]} className="navbar__icon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon="user-circle" className="navbar__icon navbar__icon--user" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
