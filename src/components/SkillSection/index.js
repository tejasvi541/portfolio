import React, { Fragment } from "react";

import { ReactComponent as SiCplusplus } from "../../icons/cplusplus.svg";
import { ReactComponent as SiPython } from "../../icons/python.svg";
import { ReactComponent as SiJavascript } from "../../icons/javascript.svg";
import { ReactComponent as SiJava } from "../../icons/java.svg";
import { ReactComponent as SiCss3 } from "../../icons/css3.svg";
import { ReactComponent as SiReact } from "../../icons/react.svg";
import { ReactComponent as SiTensorflow } from "../../icons/tensorflow.svg";
import { ReactComponent as SiPytorch } from "../../icons/pytorch.svg";
import { ReactComponent as SiHtml5 } from "../../icons/html5.svg";
import { ReactComponent as SiMongodb } from "../../icons/mongodb.svg";
import { ReactComponent as SiMysql } from "../../icons/mysql.svg";
import { ReactComponent as SiGo } from "../../icons/go.svg";
import { ReactComponent as SiSass } from "../../icons/sass.svg";
import { ReactComponent as SiUbuntu } from "../../icons/ubuntu.svg";
import { ReactComponent as SiDjango } from "../../icons/django.svg";
import { ReactComponent as SiFlask } from "../../icons/flask.svg";
import { ReactComponent as SiDocker } from "../../icons/docker.svg";
import { ReactComponent as SiGit } from "../../icons/git.svg";
import { ReactComponent as SiFirebase } from "../../icons/firebase.svg";
import { ReactComponent as SiMicrosoftazure } from "../../icons/microsoftazure.svg";
import { ReactComponent as SiEmberDotJs } from "../../icons/emberdotjs.svg";
import { ReactComponent as SiNodeDotJs } from "../../icons/nodedotjs.svg";
import { ReactComponent as SiSolidity } from "../../icons/solidity.svg";
import { ReactComponent as SiScikitlearn } from "../../icons/scikitlearn.svg";

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
						<SiSolidity height={40} width={40} />
						<LinkWrapper
							target="_blank"
							href="https://docs.soliditylang.org/en/v0.8.13/"
						>
							Solidity
						</LinkWrapper>
					</IconWrapper>

					<IconWrapper>
						<SiGo height={40} width={40} />
						<LinkWrapper target="_blank" href="https://golang.org">
							GoLang
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
						<SiReact height={40} width={40} />
						<LinkWrapper target="_blank" href="https://reactjs.org">
							React
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
						<SiSass height={40} width={40} />
						<LinkWrapper target="_blank" href="https://sass-lang.com/">
							SaSS
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
						<SiMicrosoftazure height={40} width={40} />
						<LinkWrapper
							target="_blank"
							href="https://azure.microsoft.com/en-in/"
						>
							Azure
						</LinkWrapper>
					</IconWrapper>

					<IconWrapper>
						<SiEmberDotJs height={40} width={40} />
						<LinkWrapper target="_blank" href="https://ejs.co/">
							EJS
						</LinkWrapper>
					</IconWrapper>

					<IconWrapper>
						<SiUbuntu height={40} width={40} />
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
