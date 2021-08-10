import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 760px;
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

export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const H1Dive = styled.div`
  padding:0px;
  margin: 0px;
`

export const AboutVideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const AboutWrapper = styled.div`
  display: flex;
  
`

export const About = styled.div`
  z-index: 3;
  display: grid;
  grid-gap: 0 px;
  grid-template-columns: 50% 50%;
  padding: 0 px;
  margin: 0 px;
`;


export const AboutLeftCard = styled.div`
  font-family:'Space Mono', monospace;
  height: 616px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin: 2px;
  background-color:rgb(255, 255, 255);
`;

export const AboutRight = styled.div`
  font-family:'Space Mono', monospace;
  display: flex;
  height:618px;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin:1px;
  background-color: rgba(255, 255, 255, 0);
`;


export const AboutCardTop = styled.div`
  font-family:'Space Mono', monospace;
  height: 310px;
  width:360px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 2px;
  margin-bottom: 1px;
  box-shadow:0px 0px 2px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
`;

export const AboutCardBottom = styled.div`
  font-family:'Space Mono', monospace;
  height:300px;
  width:360px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 1px;
  margin-bottom: 2px;
  box-shadow:0px 0px 2px rgb(0, 0, 0);
  background-color:rgb(255, 255, 255);
`;

export const PhotoIcon = styled.img`
  height: 562px;
  width: 380px;
  border-radius: 10px;
`;

export const AwardIcon = styled.img`
  height: 250px;
  width: 220px;
  border-radius: 10px;
`;

export const EducationIcon = styled.img`
  height: 210px;
  width: 300px;
  border-radius: 10px;
`;

export const AboutH1 = styled.h1`
  color: #000;
`;

export const AboutH2 = styled.h2`
  background-color:rgba(0, 0, 0, 0);
  color:#000;
  background: rgba(0, 0, 0, 0);
  font-family:'Space Mono', monospace;
`;

export const AboutH4 = styled.h4`
  background-color:rgba(0, 0, 0, 0);
  color: #000;
  background: rgba(0, 0, 0, 0);
  font-family:'Space Mono', monospace;
`;


