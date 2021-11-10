import styled from 'styled-components';

export const AboutContainer = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0px;
  margin: 0px;
  //background-color:#ff52ee; 
  //pink
  
  @media screen and (max-width: 480px) {
    height: 1000px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 0px;
    margin: 0px;
    //background-color:#ff52ee; 
    //pink
  }
`;

export const AboutWrapper = styled.div`
    max-height: 644px;
    height: 644px;
    display: flex;
    padding:0px;
    margin: 0px;
    //background-color:#002463; 
    //darkblue 

  @media screen and (max-width: 480px) {
    height: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding:0px;
    margin: 0px;
    //background-color:#002463; 
    //darkblue
  }
`;

export const AboutLeftCont = styled.div`
  max-height:644px;
  height: auto;
  width: 2700px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0px;
  margin: 0px;
  background-color: #0a0a0a;
  //background-color:#6e0000; 
  //darkred
    
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const AboutMiddleCont = styled.div`
  height: auto;
  width: 850px;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 15% 42.5% 42.5%;
  justify-content: center;
  align-items: center;
  grid-gap: 0px;
  padding: 0px;
  margin: 0px;
  background-color: #0a0a0a;
  //background-color: #3a0096; 
  //purpleblue

  @media screen and (max-width: 480px) {
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  background-color: #0a0a0a;
  //background-color: #3a0096; 
  //purpleblue
  }
`;

export const AboutTopCont = styled.div`
  height:100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  //background-color:#d4a200;
  //gold
  
  @media screen and (max-width: 480px) {
    height:20px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-bottom: 16px;
    //background-color:#d4a200;
    //gold
  }
`;

export const AboutH1 = styled.h1`
  font-family:  'Space Mono', monospace;
  font-size: 2.2rem;
  padding: 0px 0px 0px 0px;
  margin: 0 px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-family:  'Space Mono', monospace;
    font-size: 1.75rem;
    padding: 0px 0px 0px 0px;
    margin: 0 px;
    color: #fff;
  }
`;

export const AboutMiddleCard = styled.div`
  height:190px;
  width:800px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 2px;
  margin-bottom: 1px;
  box-shadow:0px 0px 2px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
  //background-color: #cfcfcf;
  //lightgray

  @media screen and (max-width: 480px) {
    height:360px;
    width:240px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 2px;
    margin-bottom: 16px;
    box-shadow:0px 0px 2px rgb(0, 0, 0);
    background-color:rgb(255, 255, 255);
    //background-color: #cfcfcf;
    //lightgray
  }
`;

export const AboutMiddleCardIn = styled.div`
  height:180px;
  width:786px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 2px;
  background-color:#dbdbdb;
  //background-color: #00e817; 
  //lightgreen
  
  @media screen and (max-width: 480px) {
    height:350px;
    width:230px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin: 2px;
    background-color:#dbdbdb;
    //background-color: #00e817; 
    //lightgreen
  }
`;

export const AboutTopH2 = styled.p`
  font-family: 'Space Mono', monospace;
  font-weight: 549;
  text-align: center;
  padding: 48px 32px 0px 16px;
  margin: 0px;
  font-size: 1rem;
  color:#000;

  @media screen and (max-width: 480px) {
  font-family: 'Space Mono', monospace;
  font-weight: 549;
  text-align: center;
  padding: 48px 32px 0px 16px;
  margin: 0px;
  font-size: 0.9rem;
  color:#000;
  }
`;

export const AboutBottomCard = styled.div`
  height:190px;
  width:800px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow:0px 0px 2px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
  //background-color: #00e817; 
  //lightgreen
  
  @media screen and (max-width: 480px) {
    height:360px;
    width:240px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    box-shadow:0px 0px 2px rgb(0, 0, 0);
    background-color:rgb(255, 255, 255);
    //background-color: #00e817; 
    //lightgreen
    }
`;

export const AboutBottomCardIn = styled.div`
  height:180px;
  width:786px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 2px;
  background-color:#dbdbdb;
  //background-color: #00e817; 
  //lightgreen
  
  @media screen and (max-width: 480px) {
    height:350px;
    width:230px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin: 2px;
    background-color:#dbdbdb;
    //background-color: #00e817; 
    //lightgree
  }
`;

export const AboutBottomH2 = styled.p`
  font-family:'Space Mono', monospace;
  font-weight: 529;
  text-align: center;
  padding: 24px 32px 0px 26px;
  margin: 0px;
  font-size: 1rem;
  color:#000;

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    font-weight: 549;
    text-align: center;
    padding: 48px 32px 0px 16px;
    margin: 0px;
    font-size: 0.9rem;
    color:#000;
  }
`;

export const AboutRightCont = styled.div`
  height:auto;
  width:2700px;
  display: flex;
  justify-content:end;
  align-items: center;
  padding: 0px 0px 0px 0px;
  margin: 0px;
  background-color: #0a0a0a;
  //background-color: #fcfc03;
  //yellow
  
  @media screen and (max-width: 480px) {
    height:800px;
    width:70px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    padding: 0px 0px 0px 0px;
    margin: 0px;
    background-color: #0a0a0a;
    //background-color: #fcfc03;
    //yellow
  }
`;

export const AboutHiddenIcon = styled.img`
  height:642px;
  width:220px;
  visibility: hidden;
 
  @media screen and (max-width: 480px) {
    height:800px;
    width:50px;
    visibility: hidden;
  }
`;