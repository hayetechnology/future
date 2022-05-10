import React from 'react';
import { Parallax } from 'react-parallax';
import VerticalName from '../../images/NameVertical.png';
import BackgroundPic from '../../images/BackgroundPara.jpg';
import LangPhotoW from '../../images/AboutLangW.png';
import TechPhotoW from '../../images/AboutTechW.png';
import LangPhotoL from '../../images/AboutLangL.png';
import TechPhotoL from '../../images/AboutTechL.png';
import {
  AboutContainer,
  AboutWrapper,
  AboutLeftCont,
  AboutMiddleCont,
  AboutTopCont,
  AboutH1,
  AboutMiddleCard,
  AboutMiddlePhotoIconW,
  AboutMiddlePhotoIconL,
  AboutBottomCard,
  AboutBottomPhotoIconW,
  AboutBottomPhotoIconL,
  AboutRightCont,
  AboutHiddenIcon
} from './AboutElements';

const About = () => {
  return (
    <Parallax bgImage={BackgroundPic} strength={800}>
    <AboutContainer id='about'>
      <AboutWrapper>
        <AboutLeftCont>  
        </AboutLeftCont>
        <AboutMiddleCont>
          <AboutTopCont>
            <AboutH1>Skills Section</AboutH1>
          </AboutTopCont>
          <AboutMiddleCard>
            <AboutMiddlePhotoIconW src={LangPhotoW}>
            </AboutMiddlePhotoIconW>
            <AboutMiddlePhotoIconL src={LangPhotoL}>
            </AboutMiddlePhotoIconL>
          </AboutMiddleCard>
          <AboutBottomCard>
            <AboutBottomPhotoIconW src={TechPhotoW}>
            </AboutBottomPhotoIconW>
            <AboutBottomPhotoIconL src={TechPhotoL}>
            </AboutBottomPhotoIconL>
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
