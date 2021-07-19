import React from 'react';
import Icon1 from '../../images/stock1.png';
import Icon2 from '../../images/stock2.png';
import Icon3 from '../../images/stock3.png';
import Icon4 from '../../images/stock4.png'; 
import { 
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServiceWrapper2,
  ServiceCardCont,
  ServiceIcon,
  ServiceH2,
  ServiceP
} from './ServiceElements';

const Service = () => {
  return (
    <ServiceContainer id='service'>
      <ServiceWrapper>
      <ServiceH1>Services</ServiceH1>
      <ServiceWrapper2>
        <ServiceCardCont>
          <ServiceH2>Grant Writing Services</ServiceH2>
          <ServiceIcon src={Icon1} />
          <ServiceP>
            You will have the benefits of having by your side our talented grant writers who specialize in obtaining maximized grant funding for minorty Non-Profit Orginzations.
          </ServiceP>
        </ServiceCardCont>
        <ServiceCardCont>
          <ServiceH2>Inclusion Training</ServiceH2>
          <ServiceIcon src={Icon2}/>
          <ServiceP>
            Demonstrate to your staff the power of an inclusive workplace. Show through training that inclusion is proven to cultivate workplace structure.
          </ServiceP>
        </ServiceCardCont>
        <ServiceCardCont>
          <ServiceH2>Diverstiy Training</ServiceH2>
          <ServiceIcon src={Icon3}/>
          <ServiceP>
            Offer diversity training to staff, training which will have your staff appreciating the value 
            that diverse prespectives bring to the workplace.
          </ServiceP>
        </ServiceCardCont>
        <ServiceCardCont>
          <ServiceH2>Athletics development</ServiceH2>
          <ServiceIcon src={Icon4}/>
          <ServiceP>
            We will guide your staff in building a well structured athletics department. Athletics is important to your non-profit, it teaches to work together as a unit through team building exercises.
          </ServiceP>
        </ServiceCardCont>
      </ServiceWrapper2>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Service;
