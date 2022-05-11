import React, {useEffect } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

const Resume = () => {

  useEffect(()=>{
    axios({
      url: 'https://issenur.com/api/resumes/1/', 
      method: 'GET',
      responseType: 'blob', 
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Isse_Nur_Resume.pdf'); 
      document.body.appendChild(link);
      link.click();
    });
  }, []);
  return(
    <Redirect to='/'/>
  );
};
 
export default Resume;