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
                The future1community vision was realized in 2016 when Mr. Gospel Gordah realized an unusual statistic 
                regarding Minnesota. Our state has zero minorty atheletic clubs. In other states you will always find one or two
                minorty operated sports clubs.
              </AboutTopH2>
            </AboutMiddleCardIn>
          </AboutMiddleCard>
          <AboutBottomCard>
            <AboutBottomCardIn>
              <AboutBottomH2>
                Our hopes is to make Minnesota leader in having the most minorty sports club. We hope to accomplish this feat through
                obtaining large federal grants for minorty charter schools, and taking a hands on approach.
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
