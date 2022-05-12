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
            <ProjectP>Full stack web application built on python, javascript, djangoREST Framework and PostgreSQL</ProjectP>
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
