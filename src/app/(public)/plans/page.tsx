'use client';

import { StayInTouch } from '@/components/sections';
import { SimplePrice } from './components/simple-price';
import { Footer } from '@/components';
import { WhatDrivesUs } from '../about-us/components/what-drives-us';
import { WhyGoatcom } from '../about-us/components/why-goatcom';
import { AnnouncementCard } from './components/announcement-card';

const Plans = () => {
  return (
    <>
      <SimplePrice></SimplePrice>
      <WhyGoatcom></WhyGoatcom>
      <WhatDrivesUs></WhatDrivesUs>
      <AnnouncementCard></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default Plans;
