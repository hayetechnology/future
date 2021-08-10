import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import IconPic from '../../images/isse_logo2.png';
import {
  ContactContainer,
  ContactWrapper,
  ContactContTop,
  ContactContBottom,
  Icon,
  Img,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormInputFName,
  FormInputLName,
  FormTextArea,
  FormButton,
  Text,
  ContIn,
  ContSub,
  ContLeft,
  ContRight,
  Cont,
  ContMessage
} from './ContactElements';

const Contact = () => {

const[isClicked, setIsClicked] = useState(false)

function sendEmail(e) {
  e.preventDefault();
  setIsClicked(true)
  emailjs.sendForm('service_fgze8ka', 'template_4f0cg4i', e.target, 'user_Z9BYkT5Th267Tx57sTwdH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}


  return (
    <React.Fragment>
      <ContactContainer>
        <ContactWrapper>
          <ContactContTop>
            <Icon to='/'>
              <Img alt = 'logo' src={IconPic}></Img>
            </Icon>
          </ContactContTop>
          <ContactContBottom>
            <Form className="contact-form" onSubmit={sendEmail}>
              <FormH1>Contact Form</FormH1>
              <Cont>
              <ContLeft>
                <FormLabel For='fname'>First</FormLabel>
                <FormInputFName type='text' name='fname' required />
              </ContLeft>
              <ContRight>
                <FormLabel For='lname'>Last</FormLabel>
                <FormInputLName type='text' name='lname' required />
              </ContRight>
              </Cont>
              <ContIn> 
              <ContSub>
                <FormLabel For='email'>Email</FormLabel>
                <FormInput type='text' name='email' required />
              </ContSub>
              </ContIn>
              <Cont>
              <ContRight> 
                <FormLabel For='business'>Company/Orginaztion</FormLabel>
                <FormInput type='text' name='business' required />
              </ContRight>
              <ContLeft>
                <FormLabel For='phone'>Phone</FormLabel>
                <FormInput type='text' name='phone' required />
              </ContLeft>
              </Cont>
              <ContSub>
                <FormLabel For='subject'>Subject</FormLabel>
                <FormInput type='text' name='subject' required />
              </ContSub>
              <ContIn>
                <FormLabel For='message'>Message</FormLabel>
                <FormTextArea type='text' name='message' required />
              </ContIn>
              <FormButton type='submit'>Submit</FormButton>
              <ContMessage>{isClicked ?  <Text>Message Sent Successfully! Thank You</Text>: <Text></Text> }</ContMessage>
            </Form>
        </ContactContBottom>
        </ContactWrapper>
      </ContactContainer>
    </React.Fragment>
  );
};

export default Contact;
