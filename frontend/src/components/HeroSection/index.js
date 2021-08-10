import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import GradPhoto from '../../images/grad_pic.JPG';
import AwardPhoto from '../../images/Award.png';
import EducationPhoto from '../../images/Education.png'
import {
  AboutContainer,
  AboutWrapper,
  AboutBg,
  AboutVideoBg,
  About,
  AboutLeftCard,
  PhotoIcon,
  AwardIcon,
  AboutRight,
  EducationIcon,
  AboutCardTop,
  AboutCardBottom,
  AboutH1,
  AboutH2,
  AboutH4
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <AboutContainer id='home'>
    <AboutBg>
      <AboutVideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
    </AboutBg>
    <AboutWrapper>
    <About>
      <AboutLeftCard>
        <PhotoIcon src={GradPhoto}></PhotoIcon>
        <AboutH1>Isse H Nur</AboutH1>
      </AboutLeftCard>
      <AboutRight>
        <AboutCardTop>
          <AboutH2>Education</AboutH2>
          <EducationIcon src={EducationPhoto}></EducationIcon>
          <AboutH4>Degree: BS in Computer Science</AboutH4>
          <AboutH4>Date Graduated: December 15 2020</AboutH4>
        </AboutCardTop>
        <AboutCardBottom>
          <AboutH2>Awards</AboutH2>
          <AwardIcon src={AwardPhoto}></AwardIcon>
          <AboutH4>Phi Theta Kappa Honors Society</AboutH4>
        </AboutCardBottom>
      </AboutRight>
    </About>
    </AboutWrapper>
    </AboutContainer>
  );
}

export default HeroSection;
