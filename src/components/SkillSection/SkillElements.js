import styled from "styled-components";

export const SkillContainer = styled.div`
	background: #f9f9f9;
	height: 1100px;
	padding-top: 20px;

	@media screen and (max-width: 768px) {
		padding: 100px 0;
		height: 1900px;
	}
`;

export const SkillWrapper = styled.div`
	display: grid;
	grid-row-gap: 55px;
	grid-column-gap: 50px;
	grid-template-columns: repeat(4, 1fr);
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	margin-top: 10px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-items: center;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const IconWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 15px;
	justify-items: center;
`;

export const LinkWrapper = styled.a`
	text-decoration: none;
	justify-items: center;
	font-weight: bold;
	padding-bottom: 10px;
	color: #01bf71;
`;

export const TextWrapper = styled.div`
	display: flex;
	justify-content: center;
	max-width: 540px;
	padding-top: 48px;
	padding-bottom: 60px;

	@media screen and (max-width: 768px) {
		padding-top: 0px;
	}
`;

export const TopLine = styled.div`
	color: #01bf71;
	padding-bottom: 8px;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
	overflow-y: hidden;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: #010606;
	overflow-y: hidden;

	@media screen and (max-width: 480px) {
		font-size: 32px;
		line-height: 1;
	}
`;

export const HeadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	overflow-y: hidden;
`;

export const SkillIcon = styled.img`
  width: '40px',
  height: '40px',
`;
