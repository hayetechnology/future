import styled from 'styled-components';

export const DemoContainer = styled.div`
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

export const DemoWrapper = styled.div`
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

export const DemoH1 = styled.h1`
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
    //display:none;
  } 
`;

export const DemoWrapper2 = styled.div`
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
    //display:none;
  }
`;

export const DemoCardCont = styled.div`
  display: flex;
  height: 100%;
  width: 22%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  //background-color:#15ff00;
  //slimegreen
  //display:none;

  
  @media screen and (max-width: 880px) {
    display: flex;
    height: 100%;
    width:auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background-color:#15ff00;
    //slimegreen
    //display:none;
  }
`;

export const DemoIcon = styled.img`
  height: 192px;
  width: 248px;
  padding: 0px;
  border-radius: 10px;
  //background-color:#00abb8;
  //teal
  
  @media screen and (max-width: 880px) {
    height: 192px;
    width: 248px;
    padding: 0px;
    border-radius: 10px;
    //background-color:#00abb8;
    //teal
    //display:none;
  }
`;

export const DemoH2 = styled.h2`
  font-family:  'Space Mono', monospace;
  text-align: center;
  font-size: 1rem;
  font-weight: 549;
  color: #a60000;
  padding: 8px 16px 16px 16px;
  margin: 0px;
  
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
    //display:none;
  }
`;

export const DemoP = styled.p`
  font-family:  'Space Mono', monospace;
  text-align: center;
  height: 290px;
  width: 300px;
  padding: 16px 32px 8px 32px;
  margin: 0px;
  font-weight: 500;
  font-size: 0.9rem;
  font-weight: 549;
  color: #121212;; 
  //display:none;
  
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
    //display:none;
  }
`;

