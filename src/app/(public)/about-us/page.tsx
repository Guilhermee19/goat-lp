'use client';

import { Footer } from '@/components';
import { CardCreateAccount, StayInTouch } from '@/components/sections';
// import { VideoHeader } from './components/video-header';
import { WhyGoatcom } from './components/why-goatcom';

const AboutUs = () => {
  return (
    <>
      {/* <VideoHeader></VideoHeader> */}
      <WhyGoatcom></WhyGoatcom>
      <CardCreateAccount
        title="Estamos aqui para transformar seu negócio."
        description="Está pronto para vender como um verdadeiro GOAT?"
      ></CardCreateAccount>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
