import React from 'react';
import Resume from '../components/Resume';
import ScrollToTop from '../components/ScrollToTop';

function ResumePage() {
  return (
    <React.Fragment>
      <ScrollToTop/>
      <Resume/>
    </React.Fragment>
  );
}

export default ResumePage;