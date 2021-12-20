import React, {useEffect } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

const Resume = () => {

  useEffect(()=>{
    axios({
      url: 'http://127.0.0.1:8000/api/resumes/1/', 
      method: 'GET',
      responseType: 'blob', 
    }).then((response) => {
      const file = new Blob([response.data],{type: 'application/pdf'}); 
      const fileURL = URL.createObjectURL(file);   
      window.open(fileURL);
    });
  }, []);
  return(
    <Redirect to='/'/>
  );
};
 
export default Resume;