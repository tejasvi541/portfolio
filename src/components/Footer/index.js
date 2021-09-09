import React from "react";
import {
  FaInstagram,
  FaKaggle,
  FaLinkedin,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Tejasvi
            </SocialLogo>
            <WebsiteRights>
              Tejasvi © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/tejasvi-88b799179/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink
                href="https://github.com/tejasvi541"
                target="_blank"
                arial-label="Github"
              >
                <FaGithub />
              </SocialIconLink>

              <SocialIconLink
                href="mailto:tejasvi.tanwar541@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                arial-label="Gmail"
              >
                <FaGoogle />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.instagram.com/tejasvi.__/"
                rel="noopener noreferrer"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.kaggle.com/tejasvii"
                rel="noopener noreferrer"
                target="_blank"
                arial-label="Twitter"
              >
                <FaKaggle />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
