import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Typewriter } from "react-simple-typewriter";
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
          <span className="loaderText">
            <Typewriter
              words={[
                "In Master's at Concordia Uni",
                "Web Developer",
                "Machine Learning Dev",
              ]}
              loop
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-40}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <HeroIconWrapper>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tejasvi-88b799179/"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>

          <a
            target="_blank"
            href="https://github.com/tejasvi541/"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            target="_blank"
            href="mailto:tejasvi.tanwar541@gmail.com"
            rel="noopener noreferrer"
          >
            <Google />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/tejasvi.__/"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            target="_blank"
            href="https://www.kaggle.com/tejasvii"
            rel="noopener noreferrer"
          >
            <Kaggle />
          </a>
        </HeroIconWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
