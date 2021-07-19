import React from 'react';
import Icon1 from '../../images/gordah_pic.jpg';
import Icon2 from '../../images/isse_pic.jpg';
import Icon3 from '../../images/ridwan_pic.png';
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard,
  TeamIcon,
  TeamH2,
  TeamP
} from './TeamElements';

const Team = () => {
  return (
    <TeamContainer id='team'>
      <TeamH1>Meet Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Icon1} />
          <TeamH2>Gospel Gordah</TeamH2>
          <TeamP>
            Owner/Founder
          </TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon2} />
          <TeamH2>Isse Nur</TeamH2>
          <TeamP>
            Web-Developer
          </TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon3} />
          <TeamH2>Ridwan Osman</TeamH2>
          <TeamP>
            Employee
          </TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
