import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactContainer = styled.div`
  height:3000px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: #a60000;
  //background-color: #5ed1ff;
  //lightblue
  
  @media screen and (max-width: 468px) {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 0px 0px 100px 0px;
    margin: 0px;
    //background-color: #5ed1ff;
    //lightblue
  }
`;

export const ContactWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns:100% ;
  grid-template-rows: max-content 100%;
  grid-gap: 0px;
  padding: 0px;
  margin: 0px;
  //background-color:#ff0000;
  //red
  @media screen and (max-width: 468px) {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns:100% ;
    grid-template-rows: max-content 100%;
    grid-gap: 0px;
    padding: 0px 0px 24px 0px;
    margin: 0px;
    //background-color:#ff0000;
    //red
  }
`;

export const Img = styled.img`
  height: 70px;
  padding:2px 0px 2px 0px;
  width: auto;
  position: fixed;

  @media screen and (max-width: 480px) {
    height: 70px;
    padding:2px 0px 2px 0px;
    width: auto;
    position: relative;
  }
`;

export const ContactContTop = styled.div`
  height:100%;
  width:100%;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 0px 0px 0px 164px;
  margin: 0px;
  //background-color:#50006b;
  //darkpurple
  
  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:start;
    align-items: center;
    padding: 0px;
    margin: 0px;
    //background-color:#50006b;
    //darkpurple
  }
`;

export const ContactContBottom = styled.div`
  height:100%;
  width:auto;
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 0px;
  padding: 8px 0px 0px 0px;
  //background-color: #00aac4; 
  //teal

  @media screen and (max-width: 480px) {
    height:100%;
    width:auto;
    display: flex;
    justify-content: center;
    align-items: start;
    margin: 0px;
    padding: 8px 0px 0px 0px;
    //background-color: #00aac4; 
    //teal
    
  }
`;

export const Icon = styled(Link)`
`;

export const Form = styled.form`
  background: #010101;
  max-width: 42%;
  max-height: 56%;
  text-align: left;
  width: 3fr;
  display: grid;
  margin: 0 auto;
  padding: 0px 32px 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background-color: #010101;

  @media screen and (max-width: 480px) {
    max-height: 100%; 
    min-width: 258px;
    width:240%;
    padding: 16px 24px 40px 24px;
    margin:0px;
  }
`;

export const FormH1 = styled.h1`
  margin: 10px 0px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const Cont = styled.div`
  display: grid;
  grid-template-columns:auto auto;
  grid-gap: 28px;
  padding: 0px;
  width: 100%;
 
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns:auto;
    grid-gap: 28px;
    padding: 0px;
  } 
`;

export const ContMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const ContIn = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  margin-top: 28 px;

  @media screen and (max-width: 768px) {
    margin-top: 14px;
    margin-bottom: 14px;
  } 
`;

export const ContSub = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  margin-top: 28 px;
  
  @media screen and (max-width: 768px) {
    margin-top: 14px;
    margin-bottom: 14px;
  } 
`;

export const ContLeft = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  padding: 0 px;
  @media screen and (max-width: 768px) {

  } 
`;

export const ContRight = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  padding: 0 px;
  
  @media screen and (max-width: 768px) {
    margin-top: 14px;
    margin-bottom: 14px;
  } 
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 14px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

export const FormInputFName = styled.input`
  padding: 14px 16px;
  margin-bottom: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

export const FormInputLName = styled.input`
  padding: 14px 16px;
  margin-bottom: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

export const FormTextArea = styled.input`
  padding: 4px 0px 80px 0px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #a60000;
  padding: 8px 0px 12px 0px;
  margin: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  float: right;
  align-items: start;
  margin-top: 24px;
  color: #22bb33;
  font-size: 16px; 
`;

