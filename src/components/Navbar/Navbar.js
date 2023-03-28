import React from "react";
import './Navbar.scss'
import logoImage from "../../assets/images/logo.png";
import SearchForm from "../SearchForm/SearchForm";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={logoImage} height="50" alt="LOGO" />
      </div>
      <div className="search-form-container">
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navbar;
