'use client';

import { StayInTouch } from '@/components/sections';
import { SimplePrice } from './components/simple-price';
import { Footer } from '@/components';
import { WhatDrivesUs } from '../about-us/components/what-drives-us';
import { WhyGoatcom } from '../about-us/components/why-goatcom';

const Plans = () => {
  return (
    <>
      <SimplePrice></SimplePrice>

      <WhyGoatcom></WhyGoatcom>
      <WhatDrivesUs></WhatDrivesUs>

      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default Plans;
