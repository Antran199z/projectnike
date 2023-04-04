import React from "react";
import { NavTitleStyle } from "./_style";
import NavTitleCenter from "./_navTitleCenter"
const NavTitle = () => {
  return (
    <NavTitleStyle>
      <div className="menu_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="" />
      </div>
      <div>
        <NavTitleCenter />
      </div>
      <div className="menu_right" >
        <div className="right_input">
          <input />
        </div>
        <div className="logo_favor">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="logo_favor">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </NavTitleStyle>
  );
};

export default NavTitle;
