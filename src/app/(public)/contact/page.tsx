'use client';

import { StayInTouch } from '@/components/sections';
import { Footer } from '@/components';
import { FormContact } from './components/form-contact';

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
