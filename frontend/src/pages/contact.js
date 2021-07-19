import React from 'react';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

function ContactPage() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Contact/>
    </React.Fragment>
  );
}

export default ContactPage;
