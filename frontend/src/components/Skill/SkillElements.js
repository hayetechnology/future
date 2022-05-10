import styled from 'styled-components';

export const SkillContainer = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0px;
  margin: 0px;
  //background-color:#ff52ee; 
  //pink
  
  @media screen and (max-width: 480px) {
    height: 1480px;
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

export const SkillWrapper = styled.div`
  max-height: 644px;
  height: 644px;
  display: flex;
  padding:0px;
  margin: 0px;
  //background-color:#223b10; 
  //darkgreen

  @media screen and (max-width: 480px) {
    height: 1320px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding:0px;
    margin: 0px;
    background-color:#223b10; 
    //darkgreen
  }
`;

export const SkillLeftCont = styled.div`
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

export const SkillMiddleCont = styled.div`
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
    height: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 16px;
    margin: 0px;
    background-color: #0a0a0a;
    //background-color: #3a0096; 
    //purpleblue
  }
`;

export const SkillTopCont = styled.div`
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
    height:48px;
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

export const SkillH1 = styled.h1`
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

export const SkillMiddleCard = styled.div`
  height:190px;
  width:800px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow:0px 0px 2px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
  //background-color: #cfcfcf;
  //lightgray

  @media screen and (max-width: 480px) {
    height:608px;
    width:222px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 0px;
    margin-bottom: 16px;
    box-shadow:0px 0px 2px rgb(0, 0, 0);
    background-color:rgb(255, 255, 255);
    //background-color: #cfcfcf;
    //lightgray
  }
`;

export const SkillMiddlePhotoIconW = styled.img`
  height: 180px;
  width: 786px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
 
  @media screen and (max-width: 480px) {
    display:none;
  }
`;

export const SkillMiddlePhotoIconL = styled.img`
  display: none;

  @media screen and (max-width: 480px) {
    height: 600px;
    width: 210px;
    display:flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
  }
`;



export const SkillBottomCard = styled.div`
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
    height:608px;
    width:222px;
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

export const SkillBottomPhotoIconW = styled.img`
  height:180px;
  width:786px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SkillBottomPhotoIconL = styled.img`
  display:none;

  @media screen and (max-width: 480px) {
    height: 600px;
    width: 210px;
    display:flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    
  }
`;


export const SkillRightCont = styled.div`
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
    height:1300px;
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

export const SkillHiddenIcon = styled.img`
  height:642px;
  width:220px;
  visibility: hidden;
 
  @media screen and (max-width: 480px) {
    height:800px;
    width:50px;
    visibility: hidden;
  }
`;




