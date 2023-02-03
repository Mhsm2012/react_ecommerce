import React from "react";
import Search from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import "./Header.css"
import { Link } from "@material-ui/core";

function Header() {
    return(

        <nav className="header">
            <img className="header__logo"  src=""  alt="logo"></img>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <Search className="header__searchIcon"/>
            </div>
            <div className="header__nav">
            <Link to="/" className="header__link">
               <div className="header__option">
            <span className="header__optionLineOne"> Hello,User</span>
            <span className="header__optionLineTwo"> Sign</span>

           </div>
           </Link>
           <Link to="/" className="header__link">
               <div className="header__option">
            <span className="header__optionLineOne">returns</span>
            <span className="header__optionLineTwo">&orders</span>

           </div>
           </Link>
           <Link to="/" className="header__link">
               <div className="header__option">
            <span className="header__optionLineOne">You</span>
            <span className="header__optionLineTwo">Prime</span>

           </div>
           </Link>
           </div>
           <Link to="/checkout" className="header__link">
               <div className="header__optionBasket">
                <ShoppingBasket/>
                <span className="header__optionLineTwo header__basketCount">2</span>
               </div>


           </Link>
        </nav>
    )
}
export default Header