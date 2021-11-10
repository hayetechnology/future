import React, { useState} from 'react';
import APIService from '../../APIService';
import IconPic from '../../images/IsseLogo2.png';
import {
  UploadContainer,
  UploadWrapper,
  UploadContTop,
  UploadContBottom,
  Icon,
  Img,
  Form,
  FormH1,
  UploadIcon,
  FormButton,
  FormLabel,
  FormSelect,
  ContLeft,
  ContRight,
  Cont,
  ContMessage,
  FormButtonBrowse,
  ContSub,
} from './UploadElements';

const Upload = () => {
  
  const [title, setTitle] = useState("");
  const [resume_pdf, setResumePdf] = useState();

  const newResume = () => {
    console.log(title);
    fetch('')
  }

/*
  useEffect(() => {
      setTitle(props.resume.title)
      setDescription(props.resume.pdffile)

  }, [props.resume])
  
  const insertResume = () => {
      APIService.InsertResume({title, pdffile})
      .then(resp => props.insertedInformation(resp))
  } */

  return (
    <React.Fragment>
      <UploadContainer>
        <UploadWrapper>
          <UploadContTop>
            <Icon to='/'>
              <Img alt = 'logo' src={IconPic}></Img>
            </Icon>
          </UploadContTop>
          <UploadContBottom>
            <Form className="Upload-form" >
              <FormH1>Upload Form</FormH1>
               <ContSub>
                  <FormLabel For='title'>PDF Title</FormLabel>
                  <FormSelect type='text' value={title} name='title' onChange={(evt) =>setTitle(evt.target.value)}  />
                </ContSub>
                <ContSub>
                  <FormLabel For='select'>Select File</FormLabel>
                  <FormSelect type='file' name='select' onChange={(evt) =>setResumePdf(evt.target.files[0])} />
                </ContSub>
              <FormButton onClick={() => newResume()} > Upload</FormButton>
              <ContMessage></ContMessage>
            </Form>
        </UploadContBottom>
        </UploadWrapper>
      </UploadContainer>
    </React.Fragment>
  );
};

export default Upload;
