import React from 'react';
import { Parallax } from 'react-parallax';
import VerticalName from '../../images/NameVertical.png';
import BackgroundPicS from '../../images/BackgroundParaS.jpg';
import LangPhoto from '../../images/AboutLang.png';
import TechPhoto from '../../images/AboutTech.png';
import {
  AboutContainer,
  AboutWrapper,
  AboutLeftCont,
  AboutMiddleCont,
  AboutTopCont,
  AboutH1,
  AboutMiddleCard,
  AboutMiddlePhotoIcon,
  AboutBottomCard,
  AboutBottomPhotoIcon,
  AboutRightCont,
  AboutHiddenIcon
} from './AboutElements';

const About = () => {
  return (
    <Parallax bgImage={BackgroundPicS} strength={500}>
    <AboutContainer id='about'>
      <AboutWrapper>
        <AboutLeftCont>  
        </AboutLeftCont>
        <AboutMiddleCont>
          <AboutTopCont>
            <AboutH1>Skills</AboutH1>
          </AboutTopCont>
          <AboutMiddleCard>
            <AboutMiddlePhotoIcon src={LangPhoto}>
            </AboutMiddlePhotoIcon>
          </AboutMiddleCard>
          <AboutBottomCard>
            <AboutBottomPhotoIcon src={TechPhoto}>
            </AboutBottomPhotoIcon>
          </AboutBottomCard>
        </AboutMiddleCont> 
        <AboutRightCont>
          <Parallax bgImage={VerticalName} strength={-500}>
          <AboutHiddenIcon src ={null}/>
          </Parallax>
        </AboutRightCont>
      </AboutWrapper>     
    </AboutContainer>
    </Parallax>
    
  );
};

export default About;
