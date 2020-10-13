import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* Search box */}
      <div className="header_search">
        <input type="text" className="header_searchinput" />
        <SearchIcon className="header_searchicon" />
      </div>
    </nav>
  );
}

export default Header;
