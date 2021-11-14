import styled from 'styled-components';

export const GithubContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:0px 0px 264px 0px;
  background: #0a0a0a;
  //background-color: #003882;
  //darkblue

  @media screen and (max-width: 768px) {
    height: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0px 0px 264px 0px;
    background: #0a0a0a;
    //background-color: #003882;
    //darkblue
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0px 0px 264px 0px;
    background: #0a0a0a;
    //background-color: #003882;
    //darkblue
  }
`;

export const GithubWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const GithubCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const GithubIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const GithubH1 = styled.h1`
  font-family:  'Space Mono', monospace;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-family:  'Space Mono', monospace;
    font-size: 2rem;
  }
`;

export const GithubH2 = styled.h2`
  font-family:  'Space Mono', monospace;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const GithubP = styled.p`
  font-family:  'Space Mono', monospace;
  font-size: 1rem;
  text-align: center;
`;
