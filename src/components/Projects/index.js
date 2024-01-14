import React, { Fragment, useEffect, useState } from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectsLink,
  ProjectsLinkWrapper,
} from "./ProjectsElements";
import axios from "axios";

const Projects = () => {
  const [res, setRes] = useState([]);
  useEffect(async () => {
    try {
      const data = await axios.get(
        "https://gh-pinned-repos.egoist.sh/?username=tejasvi541"
      );
      setRes(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Fragment>
      <ProjectsContainer id="projects">
        <ProjectsH1>My Projects</ProjectsH1>
        {res.length === 0 ? (
          "Loading"
        ) : (
          <ProjectsWrapper>
            <ProjectsCard>
              <ProjectsIcon
                src={res[0].image}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[0].repo}</ProjectsH2>
              <ProjectsP>{res[0].description}</ProjectsP>
              <ProjectsLinkWrapper live={false}>
                <ProjectsLink target="_blank" href={res[0].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={res[1].image}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[1].repo}</ProjectsH2>
              <ProjectsP>{res[1].description}</ProjectsP>
              <ProjectsLinkWrapper live={false}>
                <ProjectsLink target="_blank" href={res[1].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={res[2].image}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[2].repo}</ProjectsH2>
              <ProjectsP>{res[2].description}</ProjectsP>
              <ProjectsLinkWrapper live={true}>
                <ProjectsLink
                  target="_blank"
                  href="https://devcamper-api-webapp.herokuapp.com/"
                >
                  Live
                </ProjectsLink>
                <ProjectsLink target="_blank" href={res[2].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={res[3].image}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[3].repo}</ProjectsH2>
              <ProjectsP>{res[3].description}</ProjectsP>
              <ProjectsLinkWrapper live={false}>
                <ProjectsLink target="_blank" href={res[3].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={res[4].image}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[4].repo}</ProjectsH2>
              <ProjectsP>{res[4].description}</ProjectsP>
              <ProjectsLinkWrapper live={true}>
                <ProjectsLink
                  target="_blank"
                  href="https://devlopconnect.herokuapp.com/"
                >
                  Live
                </ProjectsLink>
                <ProjectsLink target="_blank" href={res[4].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={res[5].image}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[5].repo}</ProjectsH2>
              <ProjectsP>{res[5].description}</ProjectsP>
              <ProjectsLinkWrapper live={false}>
                <ProjectsLink target="_blank" href={res[5].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>
          </ProjectsWrapper>
        )}
      </ProjectsContainer>
    </Fragment>
  );
};

export default Projects;
