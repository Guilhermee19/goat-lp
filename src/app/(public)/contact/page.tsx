'use client';

import StayInTouch from '@/components/sections/stay-in-touch';
import { FormContact } from './components/form-contact';
import Footer from '@/components/footer';

const Contact = () => {
  return (
    <>
      <FormContact></FormContact>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default Contact;
