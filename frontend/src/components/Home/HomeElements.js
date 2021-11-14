import styled from 'styled-components';
import { Link } from 'react-scroll';
import { GrDownload } from "react-icons/gr";
import { MdDone } from "react-icons/md";
export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 960px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: none;
`;


export const HomeVideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    display: flex;
    height:1000px;
  }
`;

export const Home = styled.div`
  display: grid;
  grid-gap: 0 px;
  grid-template-columns: 50% 50%;
  padding: 0 px;
  margin: 0 px;
  z-index: 3;
  //background-color:#ff52ee; 
  //pink
  
  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-self: end;
    padding: 0px;
    margin: 0px;
    //background-color:#ff52ee; 
    //pink
  }
`;

export const HomeLeft = styled.div`
  font-family:'Space Mono', monospace;
  display: flex;
  height:700px;
  width: 380px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin:1px;
  background-color: rgba(255, 255, 255, 0);
  //background-color: #a3d9ff; 
  //somali flag blue
  

  @media screen and (max-width: 480px) {
    font-family:'Space Mono', monospace;
    display: flex;
    height: 420px;
    width: 270px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin:1px;
    background-color: rgba(255, 255, 255, 0);
    //background-color: #a3d9ff; 
    //somali flag blue
  
  }
`;

export const HomePhotoCard = styled.div`
  font-family: 'Space Mono', monospace;
  height: 540px;
  width: 348px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 2px;
  background-color:rgb(255, 255, 255);
  //background-color:#002463; 
  //darkblue 

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    height: 430px;
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin: 2px;
    background-color:rgba(81, 81, 81, 0.40);
    //background-color:#002463; 
    //darkblue 
  }
`;

export const HomePhotoIcon = styled.img`
  height: 480px;
  width: 320px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    height: 390px;
    width: 250px;
    border-radius: 10px;
  }
`;

export const HomePhotoTitle = styled.p`
  font-family: 'Space Mono', monospace;
  color: #000;
  font-size: 1.6rem;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const HomeResumeCard = styled.div`
  font-family: 'Space Mono', monospace;
  height: 70px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 2px;
  background-color:rgb(255, 255, 255);
  //background-color:#99600f; 
  //darkorange 

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    height: 320px;
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin: 2px;
    background-color:rgba(81, 81, 81, 0.40);
    //background-color:#99600f; 
    //darkorange 
  }
`;

export const HomeResumeCardIn = styled.div`
  font-family: 'Space Mono', monospace;
  height: 60px;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 2px;
  background-color:#dbdbdb;
  //background-color:#a10b5b; 
  //darkpink 

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    height: 40px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin: 2px;
    background-color:rgba(81, 81, 81, 0.40);
    //background-color:#a10b5b; 
    //darkpink 
  }
`;

export const HomeDownloadIcon = styled(GrDownload)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HomeDoneIcon = styled(MdDone)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HomeButtonD = styled(Link)`
  font-family: 'Space Mono', monospace;
  font-weight: 530;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 16px;
  padding: 12px 30px;
  background: #18c956;
  border-radius: 10px;
  border: none;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ color }) => (color ? '#fff' : '#000')};
    transform: scale(1.04);
  }

  &:active {
    background-color: #ff3f21;
  }
`;

export const HomeRight = styled.div`
  font-family:'Space Mono', monospace;
  display: flex;
  height:700px;
  width: 380px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin:1px;
  background-color: rgba(255, 255, 255, 0);
  //background-color: #94c900; 
  //yellowgreen
  

  @media screen and (max-width: 480px) {
    font-family:'Space Mono', monospace;
    display: flex;
    height: 420px;
    width: 270px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin:1px;
    background-color: rgba(255, 255, 255, 0);
    //background-color: #666666; 
    //darkgrey
  
  }
`;

export const HomeEduCard = styled.div`
  font-family: 'Space Mono', monospace;
  height: 310px;
  width:360px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 2px;
  margin-bottom: 1px;
  padding: 6px;
  box-shadow:0px 0px 2px rgb(0, 0, 0);
  background-color:#fff;
  //background-color:#6e0000; 
  //darkred

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    height: 210px;
    width:270px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 2px;
    margin-bottom: 1px;
    padding: 6px;
    box-shadow:0px 0px 2px rgb(0, 0, 0);
    background-color:rgba(81, 81, 81, 0.40);
    //background-color:#6e0000; 
    //darkred
  }
`;

export const HomeEduCardIn = styled.div`
  height:296px;
  width:342px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 2px;
  background-color:#dbdbdb;
  //background-color: #ffe100;
  //light yellow
  
  @media screen and (max-width: 480px) {
    height:196px;
    width:252px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin: 2px;
    background-color:#dbdbdb;
    //background-color: #ffe100;
    //light yellow
  }
`;

export const HomeEduIcon = styled.img`
  height: 206px;
  width: 300px;
  border-radius: 10px;
 
  @media screen and (max-width: 480px) {
    height: 116px;
    width: 210px;
    border-radius: 10px;
  }
`;

export const HomeEduAwardTitle = styled.p`
  font-family: 'Space Mono', monospace;
  color: #000;
  font-size: 1.75rem;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const HomeEduAwardP = styled.p`
  font-family: 'Space Mono', monospace;
  color: #000;
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    color: #000;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const HomeAwardCard = styled.div`
  font-family: 'Space Mono', monospace;
  height:310px;
  width:360px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 2px;
  margin-bottom: 2px;
  box-shadow:0px 0px 2px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
  //background-color:#806000; 
  //goldcoffee

  @media screen and (max-width: 480px) {
    font-family: 'Space Mono', monospace;
    height: 210px;
    width:270px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 2px;
    margin-bottom: 2px;
    box-shadow:0px 0px 2px rgb(0, 0, 0);
    background-color:rgba(81, 81, 81, 0.40);
    //background-color:#806000; 
    //goldcoffee
  }
`;

export const HomeAwardCardIn = styled.div`
  height:296px;
  width:342px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 6px;
  background-color:#dbdbdb;
  //background-color:#17b9cf; 
  //dolphinsblue
  
  @media screen and (max-width: 480px) {
    height:196px;
    width:252px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    margin: 6px;
    background-color:#dbdbdb;
    //background-color:#17b9cf;
    //dolphinsblue
  }
`;

export const HomeAwardIcon = styled.img`
  height: 225px;
  width: 210px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    height: 138px;
    width: 136px;
    border-radius: 10px;
  }
`;