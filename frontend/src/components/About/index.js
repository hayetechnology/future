import React from 'react';
import Icon1 from '../../images/stock5.png';
import Icon2 from '../../images/stock6.png';
import {
  AboutContainer,
  AboutWrapper,
  AboutContRight,
  AboutContMiddle,
  AboutContLeft,
  AboutContTop,
  AboutContBottom,
  AboutContTop2,
  AboutContBottom2,
  AboutH1,
  AboutH2Top,
  AboutH2Bottom,
  AboutIcon,
  AboutIcon2
} from './AboutElements';

const About = () => {
  return (
    <AboutContainer id='about'>
      <AboutWrapper>
      <AboutContLeft>
        <AboutIcon src ={Icon1}/>
      </AboutContLeft>
      <AboutContMiddle>
        <AboutContTop>
          <AboutH1>Our Story</AboutH1>
        </AboutContTop>
        <AboutContBottom>
          <AboutContTop2>
            <AboutH2Top>
              The future1community vision was realized in 2016 when Mr. Gospel Gordah realized an unusual statistic 
              regarding Minnesota. Our state has zero minorty atheletic clubs. In other states you will always find one or two
              minorty operated sports clubs. Minnesota also stands out from other states in regards to drug addicted minority youths. We as future1community are 
              under the impression that both of these statisics are directly related. 
            </AboutH2Top>
          </AboutContTop2>
          <AboutContBottom2>
            <AboutH2Bottom>
              Our hopes is to make Minnesota leader in having the most minorty sports club. We hope to accomplish this feat through
              obtaining large federal grants for minorty charter schools, and taking a hands on approach with builiding athletics 
              departments for these charter schools. We plan to mentor and train these schools faculties.
            </AboutH2Bottom>
          </AboutContBottom2>
        </AboutContBottom>
      </AboutContMiddle> 
      <AboutContRight>
        <AboutIcon2 src ={Icon2}/>
      </AboutContRight>
      </AboutWrapper>     
    </AboutContainer>
  );
};

export default About;
