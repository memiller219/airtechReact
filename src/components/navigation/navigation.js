import React, { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import "./navigation.styles.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import { Menu, NavLinks } from "./Toolbar/SideDrawer/SideDrawer.elements";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <ul className="NavigationItems">
      <div className="MenuIcon" onClick={handleClick}>
        {click ? <VscClose /> : <VscMenu />}
      </div>
      {}
      <Menu onClick={handleClick} click={click}>
        <li>
          <NavLinks>Home</NavLinks>
          <NavLinks>Services</NavLinks>
          <NavLinks>Contact Us</NavLinks>
        </li>
      </Menu>
    
        <NavigationItem link="/">HOME</NavigationItem>
        <NavigationItem link="/services">SERVICES</NavigationItem>
        <NavigationItem link="/contact">CONTACT US</NavigationItem>
     
    </ul>
  );
};

export default Navigation;
