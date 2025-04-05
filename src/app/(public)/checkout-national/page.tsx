'use client';

import { StayInTouch } from '@/components/sections';
import { Footer } from '@/components';
import { AnnouncementCard } from '../plans/components/announcement-card';

const CheckoutNational = () => {
  return (
    <>
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

export default CheckoutNational;
