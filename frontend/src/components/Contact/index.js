import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import IconPic from '../../images/IsseLogo2.png';
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
  emailjs.sendForm('service_cvjj87b', 'template_rz90717', e.target, 'user_AMUsjjCgbS0B6LBvxgSOl')
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
                <FormInput type='text' name='email'  />
              </ContSub>
              </ContIn>
              <Cont>
              <ContRight> 
                <FormLabel For='company-name'>Company Name</FormLabel>
                <FormInput type='text' name='company-name' required />
              </ContRight>
              <ContLeft>
                <FormLabel For='phone'>Phone</FormLabel>
                <FormInput type='text' name='phone'  />
              </ContLeft>
              </Cont>
              <ContSub>
                <FormLabel For='title'>Your Title</FormLabel>
                <FormInput type='text' name='title' required />
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
