import styled from 'styled-components';

export const ProjectContainer = styled.div`
  height:1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: fff;
  //background-color: #ffb8b8;
  //lightred
  
  @media screen and (max-width: 880px) {
    height: 1760px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    background-color: fff;
    //background-color: #ffb8b8;
    //lightred
    
  }
`;

export const ProjectWrapper = styled.div`
  height: 1000px;
  width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 20px 0px;
  margin: 0px;
  //background-color:#ffbe85;
  //lightorange

  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    //background-color:#ffbe85;
    //lightorange
  }
`;

export const ProjectH1 = styled.h1`
  font-family:  'Space Mono', monospace;
  font-size: 2.5rem;
  color: #121212;
  margin-top: 24px;
  margin-bottom: 24px;
  
  @media screen and (max-width: 880px) {
    font-family:  'Space Mono', monospace;
    font-size: 2.5rem;
    color: #121212;
    margin-top: 24px;
    margin-bottom: 60px;
  } 
`;

export const ProjectWrapper2 = styled.div`
  display:flex;
  align-items: flex-start;
  justify-content: space-evenly;
  color: #fff;
  //background-color: #f8ff21;
  //yellow
 
  @media screen and (max-width: 880px) {
    height: auto;
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    color: #fff;
    //background-color: #f8ff21;
    //yellow
  }
`;

export const ProjectCardCont = styled.div`
  display: flex;
  height: 100%;
  width: 22%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0px;
  padding: 0px;
  //background-color:#15ff00;
  //slimegreen

  @media screen and (max-width: 880px) {
    display: flex;
    height: 100%;
    width:auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background-color:#15ff00;
    //slimegreen
  }
`;


export const ProjectH2 = styled.h2`
  font-family:  'Space Mono', monospace;
  text-align: center;
  font-size: 1rem;
  font-weight: 549;
  color: #a60000;
  padding: 8px 16px 16px 16px;
  margin: 0px;
  //background-color:#001ca6;
  //deepblue
  
  @media screen and (max-width: 880px) {
    font-family:  'Space Mono', monospace;
    text-align: center;
    font-size: 1rem;
    font-weight: 549;
    color: #a60000;
    padding: 16px 16px 12px 16px;
    margin: 0px;
    //background-color:#001ca6;
    //deepblue
  }
`;

export const ProjectForm = styled.form`
  background: #010101;
  height:auto;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding: 4px 0px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background-color:#dbdbdb;
  //background-color:#850073;
  //purple

  @media screen and (max-width: 880px) {
    max-height: 100%; 
    min-width: 258px;
    width:auto;
    padding: 4px 4px;
    margin: 0px 2px;
    background-color:#dbdbdb;
    //background-color:#850073;
    //purple
  }
`;

export const ProjectDemoButton = styled.button`
  font-family: 'Space Mono', monospace;
  font-weight: 530;
  background: #bb78ff;
  padding: 12px 100px 12px 100px;
  margin: 2px 0px;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 880px) {
    font-family: 'Space Mono', monospace;
    font-weight: 530;
    background: #bb78ff;
    padding: 12px 120px;
    margin: 2px 2px;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }
`;

export const ProjectGitButton = styled.button`
  font-family: 'Space Mono', monospace;
  font-weight: 530;
  background-color: #21ffb9;
  padding: 12px 88px ;
  margin: 2px 0px;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 880px) {
    font-family: 'Space Mono', monospace;
    font-weight: 530;
    background-color: #21ffb9;
    padding: 12px 108px;
    margin: 2px 0px;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }
`;

export const ProjectDemoButtonDis = styled.button`
  font-family: 'Space Mono', monospace;
  font-weight: 530;
  background: rgba(187, 120, 255, .5);
  padding: 12px 100px 12px 100px;
  margin: 2px 0px;
  border: none;
  border-radius: 4px;
  color: #9c9c9c;
  font-size: 20px;
  cursor: not-allowed;

  @media screen and (max-width: 880px) {
    font-family: 'Space Mono', monospace;
    font-weight: 530;
    background: rgba(187, 120, 255, .5);
    padding: 12px 120px;
    margin: 2px 2px;
    border: none;
    border-radius: 4px;
    color: #9c9c9c;
    font-size: 20px;
    cursor: not-allowed;
  }
`;

export const ProjectGitButtonDis = styled.button`
  font-family: 'Space Mono', monospace;
  font-weight: 530;
  background-color: rgba(33, 255, 185,0.5);
  padding: 12px 88px ;
  margin: 2px 0px;
  border: none;
  border-radius: 4px;
  color: #9c9c9c;
  font-size: 20px;
  cursor: not-allowed;


  @media screen and (max-width: 880px) {
    font-family: 'Space Mono', monospace;
    font-weight: 530;
    background-color: #21ffb9;
    padding: 12px 108px;
    margin: 2px 0px;
    border: none;
    border-radius: 4px;
    color: #9c9c9c;
    font-size: 20px;
    cursor: not-allowed;

  }
`;

export const ProjectP = styled.p`
  font-family:  'Space Mono', monospace;
  text-align: center;
  height: 290px;
  width: 300px;
  padding: 16px 32px 8px 32px;
  margin: 0px;
  font-weight: 500;
  font-size: 0.9rem;
  font-weight: 549;
  color: #121212;
  
  @media screen and (max-width: 880px) {
    font-family:  'Space Mono', monospace;
    text-align: center;
    height: 140px;
    width: 300px;
    padding: 16px 32px 8px 32px;
    margin: 0px;
    font-weight: 500;
    font-size: 0.9rem;
    color: #121212; 
    //background-color :#39006b ;
    //darkpurple
  }
`;

