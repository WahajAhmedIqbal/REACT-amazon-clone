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
        <input type="text" className="search_input" />
        <SearchIcon className="header_searchicon" />
      </div>
      {/* 3 Links */}
      <div className="header_nav">
        {/* 1 link  */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Hello wahaj </span>
            <span>Sign </span>
          </div>
        </Link>

        {/* 2 links */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Returns </span>
            <span>$ Order </span>
          </div>
        </Link>

        {/* 3 links */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Your </span>
            <span>Prime </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
