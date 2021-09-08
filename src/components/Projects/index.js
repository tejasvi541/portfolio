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

const images = {
  img0: "https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png",
  img1: "https://www.dataquest.io/wp-content/uploads/2019/01/1-LPnY8nOLg4S6_TG0DEXwsg-1.png",
  img2: "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F549262%2Fd6f4f6e13fa211c9e773479566d89ac9%2FExample-for-fashion-MNIST-Each-class-is-represented-by-nine-cases.png?generation=1576784453715625&alt=media",
  img3: "https://upload.wikimedia.org/wikipedia/commons/2/27/MnistExamples.png",
  img4: "https://cdn.artandlogic.com/wp-content/uploads/django.jpeg",
  img5: "https://raw.githubusercontent.com/tejasvi541/DevConnector-Social/main/Screenshot1.png",
};

const Projects = () => {
  const [res, setRes] = useState([]);
  useEffect(async () => {
    try {
      const data = await axios.get(
        "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=tejasvi541"
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
                src={images.img0}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[0].repo}</ProjectsH2>
              <ProjectsP>{res[0].description}</ProjectsP>
              <ProjectsLinkWrapper live={true}>
                <ProjectsLink
                  target="_blank"
                  href="https://devcamper-api-webapp.herokuapp.com/"
                >
                  Live
                </ProjectsLink>
                <ProjectsLink target="_blank" href={res[0].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={images.img1}
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
                src={images.img2}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[2].repo}</ProjectsH2>
              <ProjectsP>{res[2].description}</ProjectsP>
              <ProjectsLinkWrapper live={true}>
                <ProjectsLink
                  target="_blank"
                  href="https://fashionmnistclassifier.netlify.app/"
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
                src={images.img3}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[3].repo}</ProjectsH2>
              <ProjectsP>{res[3].description}</ProjectsP>
              <ProjectsLinkWrapper live={true}>
                <ProjectsLink
                  target="_blank"
                  href="https://handdigits.netlify.app/"
                >
                  Live
                </ProjectsLink>
                <ProjectsLink target="_blank" href={res[3].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={images.img4}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[4].repo}</ProjectsH2>
              <ProjectsP>{res[4].description}</ProjectsP>
              <ProjectsLinkWrapper live={false}>
                <ProjectsLink target="_blank" href={res[4].link}>
                  Github
                </ProjectsLink>
              </ProjectsLinkWrapper>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsIcon
                src={images.img5}
                alt="Project Image"
              ></ProjectsIcon>
              <ProjectsH2>{res[5].repo}</ProjectsH2>
              <ProjectsP>{res[5].description}</ProjectsP>
              <ProjectsLinkWrapper live={true}>
                <ProjectsLink
                  target="_blank"
                  href="https://devlopconnect.herokuapp.com/"
                >
                  Live
                </ProjectsLink>
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
