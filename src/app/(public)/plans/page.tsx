'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { WhatDrivesUs } from '../about-us/components/what-drives-us';
import { WhyGoatcom } from '../about-us/components/why-goatcom';
import { AnnouncementCard } from './components/announcement-card';
import { SimplePrice } from './components/simple-price';
import Footer from '@/components/footer';

const Plans = () => {
  return (
    <>
      <SimplePrice></SimplePrice>
      <WhyGoatcom></WhyGoatcom>
      <WhatDrivesUs></WhatDrivesUs>
      <AnnouncementCard
        title="Pagamentos simples, experiência impecável"
        description="Com suporte para os métodos mais utilizados no Brasil, seu cliente
          compra com facilidade e sem complicação."
        className="bg-[#0a201d] border-[#085035]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default Plans;
