import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import {
  FaInstagram,
  FaKaggle,
  FaLinkedin,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.8;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroIconWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    margin-top: 18;
  }
`;

export const Github = styled(FaGithub)`
  cursor: pointer;
  color: #fff;
  height: 30px;
  width: 30px;
  margin: 17px;
  &:hover {
    transition: all 0.3s ease-out;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.8);
    color: #01bf71;
  }
  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
export const Linkedin = styled(FaLinkedin)`
  cursor: pointer;
  color: #fff;
  height: 30px;
  width: 30px;
  margin: 17px;
  &:hover {
    transition: all 0.3s ease-out;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.8);
    color: #01bf71;
  }
  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
export const Instagram = styled(FaInstagram)`
  cursor: pointer;
  color: #fff;
  height: 30px;
  width: 30px;
  margin: 17px;
  &:hover {
    transition: all 0.3s ease-out;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.8);
    color: #01bf71;
  }
  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
export const Google = styled(FaGoogle)`
  cursor: pointer;
  color: #fff;
  height: 30px;
  width: 30px;
  margin: 17px;
  &:hover {
    transition: all 0.3s ease-out;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.8);
    color: #01bf71;
  }
  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
export const Kaggle = styled(FaKaggle)`
  cursor: pointer;
  color: #fff;
  height: 28px;
  width: 28px;
  margin: 17px;
  &:hover {
    transition: all 0.3s ease-out;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.8);
    color: #01bf71;
  }
  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
