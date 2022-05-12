import React from 'react';
import { 
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectWrapper2,
  ProjectCardCont,
  ProjectForm,
  ProjectDemoButton,
  ProjectGitButton,
  ProjectDemoButtonDis,
  ProjectGitButtonDis,
  ProjectH2,
  ProjectP
} from './ProjectElements';


const Project = () => {
  const openGitPortfolio = () => {
    window.open("https://github.com/hayetechnology/myportfolio");
  };

  return (
    <ProjectContainer id='project'>
      <ProjectWrapper>
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper2>
        <ProjectCardCont>
            <ProjectH2>MyPortfolio App</ProjectH2>
            <ProjectForm className="contact-form" >
              <ProjectDemoButton>Demo</ProjectDemoButton>
              <ProjectGitButton onClick={openGitPortfolio}>Github</ProjectGitButton>
            </ProjectForm>
            <ProjectP>Python javascript django REST framework full stack web application.</ProjectP>
        </ProjectCardCont>
        <ProjectCardCont>
            <ProjectH2>Coming Soon</ProjectH2>
            <ProjectForm className="contact-form" >
              <ProjectDemoButtonDis >Demo</ProjectDemoButtonDis>
              <ProjectGitButtonDis >Github</ProjectGitButtonDis>
            </ProjectForm>
            <ProjectP>Coming Soon</ProjectP>
        </ProjectCardCont>
        <ProjectCardCont>
            <ProjectH2>Coming Soon</ProjectH2>
            <ProjectForm className="contact-form" >
              <ProjectDemoButtonDis>Demo</ProjectDemoButtonDis>
              <ProjectGitButtonDis>Github</ProjectGitButtonDis>
            </ProjectForm>
            <ProjectP>Coming Soon</ProjectP>
        </ProjectCardCont>
        <ProjectCardCont>
            <ProjectH2>Coming Soon</ProjectH2>
            <ProjectForm className="contact-form" >
              <ProjectDemoButtonDis>Demo</ProjectDemoButtonDis>
              <ProjectGitButtonDis>Github</ProjectGitButtonDis>
            </ProjectForm>
            <ProjectP>Coming Soon</ProjectP>
        </ProjectCardCont>
      </ProjectWrapper2>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
