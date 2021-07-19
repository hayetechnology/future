import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: #0a0a0a;
  //background-color:#ff52ee; 
  //pink

  
  @media screen and (max-width: 480px) {
    height: 1000px;
    display: flex;
    max-width:auto;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    background-color: #0a0a0a;
    //background-color:#ff52ee;
    //pink
  }
`;

export const AboutWrapper = styled.div`
  max-height:800px;
  height: 800px;
  width:1500px;
  display: grid;
  grid-gap: 0px;
  padding: 0px;
  margin: 0px;
  grid-template-columns: 15% 70% 15%;
  //background-color:#002463; 
  //darkblue 

  @media screen and (max-width: 480px) {
    max-height: 1000px;
    max-width:100%;
    height: 1000px;
    display: grid;
    grid-gap: 0 px;
    grid-template-columns: 15% 70% 15%;
    padding: 0 px;
    margin: 0 px;
    //background-color: #002463; 
    //darkblue 
  }
`;

export const AboutContLeft = styled.div`
  max-height:800px;
  max-width:1500px;
  height:100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: start;
  grid-gap: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px;
  //background-color:#6e0000; 
  //darkred
    
  @media screen and (max-width: 480px) {
      max-height:1000px;
      height:100%;
      width:100%;
      display: flex;
      justify-content: center;
      align-items: start;
      grid-gap: 0px;
      padding: 0px 0px 0px 0px;
      margin: 0px;
      //background-color:#6e0000;
      //darkred
    }
`;

export const AboutContMiddle = styled.div`
  max-height:800px;
  max-width:1424px;
  height:100%;
  width:100%;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 15% 85%;
  justify-content: center;
  align-items: center;
  grid-gap: 0px;
  padding: 0px;
  margin: 0px;
  //background-color: #3a0096; 
  //purpleblue

  @media screen and (max-width: 480px) {
    max-height:1000px;
    height:100%;
    width:100%;
    display: grid;
    grid-gap: 0px;
    grid-template-rows: 15% 85%;
    justify-content: center;
    align-items: center;
    grid-gap: 0px;
    padding: 0px 24px 0px 0px;
    margin: 0px;
    //background-color: #3a0096; 
    //purpleblue
  }
`;

export const AboutContRight = styled.div`
  height:1000px;
  height:100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0px 0px 0px 0px;
  margin: 0px;
  //background-color: #fcfc03;
  //yellow
  
  @media screen and (max-width: 480px) {
    height:709px;
    height:100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: start;
    grid-gap: 0px;
    padding: 118px 0px 0px 24px;
    margin: 0px;
    //background-color: #fcfc03;
    //yellow
  }
`;

export const AboutContTop = styled.div`
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-self: end;
    padding: 0px;
    margin: 0px;
    //background-color:#d4a200;
    //gold
  }
`;

export const AboutContBottom = styled.div`
  height: 709px; 
  height:100%;
  width:100%;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 50% 50%;
  padding: 0px 42px 24px 48px;
  margin: 0px;
  //background-color: #00aac4; 
  //teal

  @media screen and (max-width: 480px) {
    height: 709px; 
    height:100%;
    min-width:319px;
    width:100%;
    display: grid;
    grid-gap: 0px;
    grid-template-rows: 50% 50%;
    padding: 0px 0px 0px 0px;
    margin: 0px;
    //background-color: #00aac4; 
    //teal
  }
`;

export const AboutH1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  padding: 0px 0px 0px 0px;
  margin: 0 px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    height:100%;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:flex-end;
    padding: 0px 0px 0px 0px;
    margin: 0px;
    color: #fff;
  }
`;

export const AboutContTop2 = styled.div`
  height:100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 70px 0px 70px;
  margin: 0px;
  //background-color: #cfcfcf;
  //lightgray

  @media screen and (max-width: 480px) {
    height:100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px 24px 8px;
    margin: 0px;
    //background-color: #cfcfcf;
    //lightgray
  }
`;

export const AboutContBottom2 = styled.div`
  height:100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 70px 0px 70px;
  margin: 0px;
  //background-color: #00e817; 
  //lightgreen
  
  @media screen and (max-width: 480px) {
    height:100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 8px 0px 8px;
    margin: 0px;
    //background-color: #00e817; 
    //lightgreen
  }
`;

export const AboutH2Top = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 549;
  text-align: center;
  padding: 48px 32px 0px 16px;
  margin: 0px;
  font-size: 1.25rem;
  color:#fff;

  @media screen and (max-width: 1000px) {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 0px 0px 0px 0px;
    margin: 0px;
    font-size: 1rem;
    color:#fff;
  }

  @media screen and (max-width: 480px) {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 0px 0px 0px 0px;
    margin: 0px;
    font-size: 0.75rem;
    color:#fff;
  }

  
  @media screen and (max-width: 360px) {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 0px 42px 0px 42px;
    margin: 0px;
    font-size: 0.75rem;
    color:#fff;
  }
`;

export const AboutH2Bottom = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 549;
  text-align: center;
  padding: 0px 32px 48px 26px;
  margin: 0px;
  font-size: 1.25rem;
  color:#fff;

  @media screen and (max-width: 1000px) {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 0px 0px 0px 0px;
    margin: 0px;
    font-size: 1rem;
    color:#fff;
  }
  
  @media screen and (max-width: 480px) {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 0px 0px 0px 0px;
    margin: 0px;
    font-size: 0.75rem;
    color:#fff;
  }

  @media screen and (max-width: 360px) {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 0px 42px 0px 42px;
    margin: 0px;
    font-size: 0.75rem;
    color:#fff;
  }
`;

export const AboutIcon = styled.img`
  height:664px;
  width:216px;
  margin: 0px;
  padding: 0px;
  border-radius: 10px;
  
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const AboutIcon2 = styled.img`
  height:765px;
  width: 80px;
  margin: 0px;
  padding: 0px;


  @media screen and (max-width: 480px) {
    height: 560px;
    width: 58px;
    margin: 0px;
    padding: 0px;
  }
`;



