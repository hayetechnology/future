import React from 'react';
import { Parallax } from 'react-parallax';
import VerticalName from '../../images/SkillNameVertical.png';
import BackgroundPic from '../../images/SkillBackgroundPara.jpg';
import LangPhotoW from '../../images/SkillLangW.png';
import TechPhotoW from '../../images/SkillTechW.png';
import LangPhotoL from '../../images/SkillLangL.png';
import TechPhotoL from '../../images/SkillTechL.png';
import {
  SkillContainer,
  SkillWrapper,
  SkillLeftCont,
  SkillMiddleCont,
  SkillTopCont,
  SkillH1,
  SkillMiddleCard,
  SkillMiddlePhotoIconW,
  SkillMiddlePhotoIconL,
  SkillBottomCard,
  SkillBottomPhotoIconW,
  SkillBottomPhotoIconL,
  SkillRightCont,
  SkillHiddenIcon
} from './SkillElements';

const Skill = () => {
  return (
    <Parallax bgImage={BackgroundPic} strength={800}>
    <SkillContainer id='skill'>
      <SkillWrapper>
        <SkillLeftCont>  
        </SkillLeftCont>
        <SkillMiddleCont>
          <SkillTopCont>
            <SkillH1>Skills</SkillH1>
          </SkillTopCont>
          <SkillMiddleCard>
            <SkillMiddlePhotoIconW src={LangPhotoW}>
            </SkillMiddlePhotoIconW>
            <SkillMiddlePhotoIconL src={LangPhotoL}>
            </SkillMiddlePhotoIconL>
          </SkillMiddleCard>
          <SkillBottomCard>
            <SkillBottomPhotoIconW src={TechPhotoW}>
            </SkillBottomPhotoIconW>
            <SkillBottomPhotoIconL src={TechPhotoL}>
            </SkillBottomPhotoIconL>
          </SkillBottomCard>
        </SkillMiddleCont> 
        <SkillRightCont>
          <Parallax bgImage={VerticalName} strength={-500}>
          <SkillHiddenIcon src ={null}/>
          </Parallax>
        </SkillRightCont>
      </SkillWrapper>     
    </SkillContainer>
    </Parallax>
    
  );
};

export default Skill;
