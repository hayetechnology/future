import React, { useState} from 'react';
import IconPic from '../../images/IsseLogo2.png';
import {
  ResumeContainer,
  ResumeWrapper,
  ResumeCont,
  Icon,
  Img,
} from './ResumeElements';

const Resume = () => {

  const [resume, setResume] = useState([])
 
  let history = useHistory()

  useEffect(() =>{
      fetch('http://127.0.0.1:8000/api/resumes/1/', {
          'method':'GET',
          headers: {
          'Content-Type':'application/pdf',
          'Content-Disposition': 'inline;'
          }
      })
      .then(resp => resp.json())
      .then(resp => setResume(resp))
      .catch(error => console.log(error))

  }, [])

  
  

  return (
    <React.Fragment>
      <ResumeContainer>
        <ResumeWrapper>
          <ResumeCont>
            <Icon to='/resume'>
              <Img alt = 'logo' src={resume}></Img>
            </Icon>
          </ResumeCont>
        </ResumeWrapper>
      </ResumeContainer>
    </React.Fragment>
  );
};

export default Resume;
