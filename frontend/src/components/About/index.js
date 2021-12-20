import React from 'react';
import { Parallax } from 'react-parallax';
import VerticalName from '../../images/NameVertical.png';
import BackgroundPicS from '../../images/BackgroundParaS.jpg';
import {
  AboutContainer,
  AboutWrapper,
  AboutLeftCont,
  AboutMiddleCont,
  AboutTopCont,
  AboutH1,
  AboutMiddleCard,
  AboutMiddleCardIn,
  AboutTopH2,
  AboutBottomCard,
  AboutBottomCardIn,
  AboutBottomH2,
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
            <AboutH1>My Story</AboutH1>
          </AboutTopCont>
          <AboutMiddleCard>
            <AboutMiddleCardIn>
              <AboutTopH2>
                My tech journey started when I was a kid. I started by reformatting and installing windows for my neighbors. 
                6 years later I bought my first gaming laptop which I ran linux commands
              </AboutTopH2>
            </AboutMiddleCardIn>
          </AboutMiddleCard>
          <AboutBottomCard>
            <AboutBottomCardIn>
              <AboutBottomH2>
                As far as professional exprience goes, I have the most exprience with Java, Python, Linux 
                and MySQL
              </AboutBottomH2>
            </AboutBottomCardIn>
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
