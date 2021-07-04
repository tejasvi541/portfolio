import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Tejasvi</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact Me!</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              target="_blank"
              href="https://drive.google.com/file/d/1OeCRJcJLgzSCW15TGHvGlvdX7_7qhxCs/view?usp=sharing"
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
