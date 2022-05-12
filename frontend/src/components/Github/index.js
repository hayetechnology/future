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
      <GithubH1>Github</GithubH1>
      <GithubWrapper>
        <GithubCard>
          <GithubIcon/>
          <GithubH2>MyPortfolio</GithubH2>
          <GithubP>
            Source Code
          </GithubP>
        </GithubCard>
        <GithubCard>
          <GithubIcon/>
          <GithubH2>P2</GithubH2>
          <GithubP>
            Coming Soon
          </GithubP>
        </GithubCard>
        <GithubCard>
          <GithubIcon/>
          <GithubH2>P3</GithubH2>
          <GithubP>
           Coming Soon
          </GithubP>
        </GithubCard>
        <GithubCard>
          <GithubIcon/>
          <GithubH2>P4</GithubH2>
          <GithubP>
            Coming Soon
          </GithubP>
        </GithubCard>
      </GithubWrapper>
    </GithubContainer>
  );
};

export default Github;
