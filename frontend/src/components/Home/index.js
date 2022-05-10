
import Video from '../../videos/video.mp4';
import GradPhoto from '../../images/HomeMyPhoto.JPG';
import AwardPhoto from '../../images/HomeAward.png';
import EduPhoto from '../../images/HomeEducation.png';
import React from 'react';
import {
  HomeContainer,
  HomeBg,
  HomeVideoBg,
  HomeWrapper,
  Home,
  HomeLeft,
  HomePhotoCard,
  HomePhotoIcon,
  HomePhotoTitle,
  HomeResumeCard,
  HomeResumeCardIn,
  HomeDownloadIcon,
  HomeButtonD,
  HomeRight,
  HomeEduCard,
  HomeEduCardIn,
  HomeEduIcon,
  HomeEduAwardTitle,
  HomeEduAwardP,
  HomeAwardCard,
  HomeAwardCardIn,
  HomeAwardIcon,
  NavLinks  
} from './HomeElements';

  function HomeSection() {
   
    
    return (
    <HomeContainer id='home'>
      <HomeBg>
        <HomeVideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HomeBg>
      <HomeWrapper>
        <Home>
          <HomeLeft>
            <HomePhotoCard>
              <HomePhotoIcon src={GradPhoto}></HomePhotoIcon>
              <HomePhotoTitle>Isse H Nur</HomePhotoTitle>
            </HomePhotoCard>
            <HomeResumeCard>
              <HomeResumeCardIn>
               <NavLinks><HomeButtonD to='/resume'>VIEW OR DOWNLOAD RESUME/CV<HomeDownloadIcon/></HomeButtonD></NavLinks>
              </HomeResumeCardIn> 
            </HomeResumeCard>
          </HomeLeft> 
          <HomeRight>
            <HomeEduCard>        
              <HomeEduCardIn>     
                <HomeEduIcon src={EduPhoto}></HomeEduIcon>
                <HomeEduAwardP>Degree: BS in Computer Science</HomeEduAwardP>
                <HomeEduAwardP>Graduation Date: Jan 2021</HomeEduAwardP>
              </HomeEduCardIn>
              <HomeEduAwardTitle>Education</HomeEduAwardTitle>
            </HomeEduCard>
            <HomeAwardCard>      
              <HomeAwardCardIn>
                <HomeAwardIcon src={AwardPhoto}></HomeAwardIcon>
                <HomeEduAwardP>Phi Theta Kappa Honors Society</HomeEduAwardP>
              </HomeAwardCardIn>
              <HomeEduAwardTitle>Awards</HomeEduAwardTitle>
            </HomeAwardCard>
          </HomeRight>
        </Home>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default HomeSection;
