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
      const blob = new Blob([response.data],{type: 'application/pdf'});
      const fileURL = URL.createObjectURL(blob);   
      window.open(fileURL);
    });
  }, []);
  return(
    <Redirect to='/'/>
  );
};
 
export default Resume;