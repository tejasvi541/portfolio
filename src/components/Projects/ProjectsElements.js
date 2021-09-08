import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1350px;
  }

  @media screen and (max-width: 640px) {
    height: 2350px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ProjectsLinkWrapper = styled.div`
  max-width: 1000px;
  margin: 15px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  padding: 0 50px;
  align-items: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsLink = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 5px 11px;
  color: #010606;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #fff;
  }
`;