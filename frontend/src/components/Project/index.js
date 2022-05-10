import React from 'react';
import Icon1 from '../../images/Project1.png';
import Icon2 from '../../images/Project2.png';
import Icon3 from '../../images/Project3.png';
import Icon4 from '../../images/Project4.png'; 
import { 
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectWrapper2,
  ProjectCardCont,
  ProjectIcon,
  ProjectH2,
  ProjectP
} from './ProjectElements';

const Project = () => {
  return (
    <ProjectContainer id='project'>
      <ProjectWrapper>
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper2>
          <ProjectCardCont>
            <ProjectH2>Portfolio</ProjectH2>
            <ProjectIcon src={Icon1} />
            <ProjectP>
            MyPortfolio Python and Javascript
            </ProjectP>
          </ProjectCardCont>
        <ProjectCardCont>
          <ProjectH2>Coming Soon</ProjectH2>
          <ProjectIcon src={Icon2}/>
          <ProjectP>
            Coming Soon
          </ProjectP>
        </ProjectCardCont>
        <ProjectCardCont>
          <ProjectH2>Coming Soon</ProjectH2>
          <ProjectIcon src={Icon3}/>
          <ProjectP>
            Coming Soon
          </ProjectP>
        </ProjectCardCont>
        <ProjectCardCont>
          <ProjectH2>Coming Soon</ProjectH2>
          <ProjectIcon src={Icon4}/>
          <ProjectP>
          Coming Soon
          </ProjectP>
        </ProjectCardCont>
      </ProjectWrapper2>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
