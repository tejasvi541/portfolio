import React, { Fragment, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
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

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Tejasvi
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {[
                { to: "about", title: "About" },
                { to: "skills", title: "Skills" },
                { to: "projects", title: "Projects" },
                { to: "contact", title: "Contact me" },
              ].map(({ to, title }) => (
                <NavItem key={to}>
                  <NavLinks
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-60}
                  >
                    {title}
                  </NavLinks>
                </NavItem>
              ))}
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
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
