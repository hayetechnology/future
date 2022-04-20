import React from 'react';
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
          <GithubH2>P1</GithubH2>
          <GithubP>
            Project 1
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
