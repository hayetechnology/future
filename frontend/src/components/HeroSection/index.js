import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/video.mp4';
import Icon1 from '../../images/future_text_logo.png';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroIcon,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroIcon src={Icon1}></HeroIcon>
        <HeroP>
        Black owned and black operated, make future1community your number one choice to fulfill your grant writing and diversity training services needs.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='team'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Meet our Team {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
