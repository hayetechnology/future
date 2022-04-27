import React from 'react';
import Icon1 from '../../images/Proj1.png';
import Icon2 from '../../images/Proj2.png';
import Icon3 from '../../images/Proj3.png';
import Icon4 from '../../images/Proj4.png'; 
import { 
  DemoContainer,
  DemoH1,
  DemoWrapper,
  DemoWrapper2,
  DemoCardCont,
  DemoIcon,
  DemoH2,
  DemoP
} from './DemoElements';
/**
 * Function Component which returns a projects page
 * @returns 
 */
const Demo = () => {
  return (
    <DemoContainer id='demo'>
      <DemoWrapper>
      <DemoH1>Projects</DemoH1>
      <DemoWrapper2>
          <DemoCardCont>
            <DemoH2>Portfolio</DemoH2>
            <DemoIcon src={Icon1} />
            <DemoP>
            My Portfolio Built on Python and Javascript
            </DemoP>
          </DemoCardCont>
        <DemoCardCont>
          <DemoH2>Project 2</DemoH2>
          <DemoIcon src={Icon2}/>
          <DemoP>
            Description of project
          </DemoP>
        </DemoCardCont>
        <DemoCardCont>
          <DemoH2>Project 3</DemoH2>
          <DemoIcon src={Icon3}/>
          <DemoP>
            Description of Project
          </DemoP>
        </DemoCardCont>
        <DemoCardCont>
          <DemoH2>Project 4</DemoH2>
          <DemoIcon src={Icon4}/>
          <DemoP>
          Description of Project
          </DemoP>
        </DemoCardCont>
      </DemoWrapper2>
      </DemoWrapper>
    </DemoContainer>
  );
};

export default Demo;
