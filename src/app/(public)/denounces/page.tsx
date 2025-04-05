'use client';

import { StayInTouch } from '@/components/sections';
import { Footer } from '@/components';
import { FormDenounces } from './components/form-denounces';

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
