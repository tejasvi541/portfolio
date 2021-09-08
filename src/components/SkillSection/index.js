import React, { Fragment } from "react";

import {
  SiPython,
  SiJavascript,
  SiJava,
  SiCplusplus,
  SiCss3,
  SiReact,
  SiNodeDotJs,
  SiTensorflow,
  SiPytorch,
  SiHtml5,
  SiEmberDotJs,
  SiMongodb,
  SiMysql,
  SiGo,
  SiSass,
  SiUbuntu,
} from "react-icons/si";

import {
  SkillContainer,
  SkillWrapper,
  TextWrapper,
  TopLine,
  Heading,
  IconWrapper,
  LinkWrapper,
} from "./SkillElements";

const SkillSection = () => {
  return (
    <Fragment>
      <SkillContainer id="skills">
        <TextWrapper>
          <TopLine>
            My <TopLine>Major</TopLine>
          </TopLine>
          <Heading>Skills</Heading>
        </TextWrapper>
        <SkillWrapper>
          <IconWrapper>
            <SiPython size="40" />
            <LinkWrapper target="_blank" href="https://python.org">
              Python
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiJavascript size="40" />
            <LinkWrapper target="_blank" href="https://www.javascript.com/">
              Javascript
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiCplusplus size="40" />
            <LinkWrapper target="_blank" href="https://www.cplusplus.com/">
              C++
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiJava size="40" />
            <LinkWrapper target="_blank" href="https://www.java.com/">
              Java
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiTensorflow size="40" />
            <LinkWrapper target="_blank" href="https://www.tensorflow.org/">
              Tensorflow
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiPytorch size="40" />
            <LinkWrapper target="_blank" href="https://www.pytorch.org/">
              Pytorch
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiReact size="40" />
            <LinkWrapper target="_blank" href="https://reactjs.org">
              React
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiNodeDotJs size="40" />
            <LinkWrapper target="_blank" href="https://www.nodejs.org/en/">
              Node
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiHtml5 size="40" />
            <LinkWrapper target="_blank" href="https://html.com/">
              HTML5
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiCss3 size="40" />
            <LinkWrapper target="_blank" href="https://www.w3schools.com/css/">
              CSS
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiSass size="40" />
            <LinkWrapper target="_blank" href="https://sass-lang.com/">
              SaSS
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiMongodb size="40" />
            <LinkWrapper target="_blank" href="https://www.mongodb.com/">
              MongoDB
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiMysql size="40" />
            <LinkWrapper target="_blank" href="https://www.mysql.com/">
              MySQL
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiGo size="40" />
            <LinkWrapper
              target="_blank"
              href="https://golang.org
"
            >
              GoLang
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiEmberDotJs size="40" />
            <LinkWrapper target="_blank" href="https://ejs.co/">
              EJS
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiUbuntu size="40" />
            <LinkWrapper target="_blank" href="https://www.ubuntu.com/">
              Ubuntu
            </LinkWrapper>
          </IconWrapper>
        </SkillWrapper>
      </SkillContainer>
    </Fragment>
  );
};

export default SkillSection;
