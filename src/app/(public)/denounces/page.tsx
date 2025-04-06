'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { FormDenounces } from './components/form-denounces';
import Footer from '@/components/footer';

const DenouncesPage = () => {
  return (
    <>
      <FormDenounces></FormDenounces>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default DenouncesPage;
