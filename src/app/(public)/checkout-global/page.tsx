'use client';

import { StayInTouch } from '@/components/sections';
import { Footer } from '@/components';
import { AnnouncementCard } from '../plans/components/announcement-card';

const CheckoutGlobal = () => {
  return (
    <>
      <AnnouncementCard></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default CheckoutGlobal;
