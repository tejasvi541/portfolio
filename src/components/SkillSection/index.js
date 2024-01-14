import React, { Fragment } from "react";

import { ReactComponent as SiCplusplus } from "../../icons/cplusplus.svg";
import { ReactComponent as SiPython } from "../../icons/python.svg";
import { ReactComponent as SiJavascript } from "../../icons/javascript.svg";
import { ReactComponent as SiTypescript } from "../../icons/typescript-2.svg";
import { ReactComponent as SiNextJs } from "../../icons/next-js.svg";
import { ReactComponent as SiJava } from "../../icons/java.svg";
import { ReactComponent as SiCss3 } from "../../icons/css3.svg";
import { ReactComponent as SiReact } from "../../icons/react.svg";
import { ReactComponent as SiTensorflow } from "../../icons/tensorflow.svg";
import { ReactComponent as SiPytorch } from "../../icons/pytorch.svg";
import { ReactComponent as SiHtml5 } from "../../icons/html5.svg";
import { ReactComponent as SiMongodb } from "../../icons/mongodb.svg";
import { ReactComponent as SiMysql } from "../../icons/mysql.svg";
import { ReactComponent as SiUbuntu } from "../../icons/ubuntu.svg";
import { ReactComponent as SiDjango } from "../../icons/django.svg";
import { ReactComponent as SiFlask } from "../../icons/flask.svg";
import { ReactComponent as SiDocker } from "../../icons/docker.svg";
import { ReactComponent as SiGit } from "../../icons/git.svg";
import { ReactComponent as SiFirebase } from "../../icons/firebase.svg";
import { ReactComponent as SiNodeDotJs } from "../../icons/nodedotjs.svg";
import { ReactComponent as SiScikitlearn } from "../../icons/scikitlearn.svg";
import { ReactComponent as SiAWS } from "../../icons/aws-2.svg";
import { ReactComponent as SiTailwind } from "../../icons/tailwind-css-2.svg";
import { ReactComponent as SiBlockchain } from "../../icons/blockchain.svg";

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
            <SiPython height={40} width={40} />
            <LinkWrapper target="_blank" href="https://python.org">
              Python
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiJavascript height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.javascript.com/">
              Javascript
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiTypescript height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.typescriptlang.org/">
              Typescript
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiCplusplus height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.cplusplus.com/">
              C++
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiJava height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.java.com/">
              Java
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiReact height={40} width={40} />
            <LinkWrapper target="_blank" href="https://reactjs.org">
              React
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiNextJs height={40} width={40} />
            <LinkWrapper target="_blank" href="https://nextjs.org/">
              Next.js
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiNodeDotJs height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.nodejs.org/en/">
              Node
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiDjango height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.djangoproject.com/">
              Django
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiFlask height={40} width={40} />
            <LinkWrapper
              target="_blank"
              href="https://flask.palletsprojects.com/"
            >
              Flask
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiHtml5 height={40} width={40} />
            <LinkWrapper target="_blank" href="https://html.com/">
              HTML5
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiCss3 height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.w3schools.com/css/">
              CSS
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiTailwind height={40} width={40} />
            <LinkWrapper target="_blank" href="https://tailwindcss.com/">
              Tailwind
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiTensorflow height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.tensorflow.org/">
              Tensorflow
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiPytorch height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.pytorch.org/">
              Pytorch
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiScikitlearn height={40} width={40} />
            <LinkWrapper target="_blank" href="https://scikit-learn.org/">
              Scikit Learn
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiMongodb height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.mongodb.com/">
              MongoDB
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiMysql height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.mysql.com/">
              MySQL
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiDocker height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.docker.com/">
              Docker
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiGit height={40} width={40} />
            <LinkWrapper target="_blank" href="https://git-scm.com/">
              Git
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiFirebase height={40} width={40} />
            <LinkWrapper target="_blank" href="https://firebase.google.com/">
              Firebase
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiAWS height={40} width={40} />
            <LinkWrapper target="_blank" href="https://aws.amazon.com/">
              AWS
            </LinkWrapper>
          </IconWrapper>

          <IconWrapper>
            <SiUbuntu height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.ubuntu.com/">
              Ubuntu/Linux
            </LinkWrapper>
          </IconWrapper>
          <IconWrapper>
            <SiBlockchain height={40} width={40} />
            <LinkWrapper target="_blank" href="https://www.blockchain.com/">
              Blockchain
            </LinkWrapper>
          </IconWrapper>
        </SkillWrapper>
      </SkillContainer>
    </Fragment>
  );
};

export default SkillSection;
