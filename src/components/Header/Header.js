import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
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
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello wahaj </span>
            <span className="header_optionLineTow">Sign </span>
          </div>
        </Link>

        {/* 2 links */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns </span>
            <span className="header_optionLineTow">$ Order </span>
          </div>
        </Link>

        {/* 3 links */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your </span>
            <span className="header_optionLineTow">Prime </span>
          </div>
        </Link>

        {/* 4th links */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* Shopping basket icon */}
            <ShoppingCartIcon />
            {/* Number of items in basket */}
            <span className="header_optionBasketCounter">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
