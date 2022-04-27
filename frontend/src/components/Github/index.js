import React from 'react';
import Icon1 from '../../images/github1.png';
import {
  GithubContainer,
  GithubH1,
  GithubWrapper,
  GithubCard,
  GithubIcon,
  GithubH2,
  GithubP
} from './GithubElements';

const Github = () => {

  return (
    <GithubContainer id='github'>
      <GithubH1>My Portfolio</GithubH1>
      <GithubWrapper>
        <GithubCard>
          <GithubIcon src ={Icon1}/>
          <GithubH2>My Portfolio</GithubH2>
          <GithubP>
            Github Source Code
          </GithubP>
        </GithubCard>
        <GithubCard>
          <GithubIcon />
          <GithubH2>P2</GithubH2>
          <GithubP>
            Project 2
          </GithubP>
        </GithubCard>
        <GithubCard>
          <GithubIcon/>
          <GithubH2>P3</GithubH2>
          <GithubP>
           Project 3
          </GithubP>
        </GithubCard>
        <GithubCard>
          <GithubIcon/>
          <GithubH2>P4</GithubH2>
          <GithubP>
            Project 4
          </GithubP>
        </GithubCard>
      </GithubWrapper>
    </GithubContainer>
  );
};

export default Github;
