import React, { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import SkillSection from "../components/SkillSection";

import { myInfoObj } from "../components/InfoSection/Data";
import Projects from "../components/Projects";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...myInfoObj} />
      <SkillSection />
      <Projects />
    </Fragment>
  );
};

export default Home;
