import React from "react";
import Logo from "./Logo/page";
import NavItems from "./NavItem/page";


function Header() {
  return (
    <div
      className="w-full flex justify-between items-center tablet:px-20 px-10 z-10 h-[70px]"
      id="header"
    >
      <Logo />
      <NavItems />
    </div>
  );
}

export default Header;
