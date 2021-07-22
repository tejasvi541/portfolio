import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroIconWrapper,
  Github,
  Instagram,
  Linkedin,
  Google,
  Kaggle,
} from "./HeroElements";

import { Button } from "../ButtonElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> Hey! I am Tejasvi</HeroH1>
        <HeroP>
          Backend Developer /<br /> Machine Learning /<br /> Web Development /
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <HeroIconWrapper>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tejasvi-88b799179/"
          >
            <Linkedin />
          </a>

          <a target="_blank" href="https://github.com/tejasvi541/">
            <Github />
          </a>
          <a target="_blank" href="mailto:tejasvi.tanwar541@gmail.com">
            <Google />
          </a>
          <a target="_blank" href="https://www.instagram.com/tejasvi.__/">
            <Instagram />
          </a>
          <a target="_blank" href="https://www.kaggle.com/tejasvii">
            <Kaggle />
          </a>
        </HeroIconWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
