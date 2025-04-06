'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnnouncementCard } from '../plans/components/announcement-card';
import Footer from '@/components/footer';
import { ClientCarousel } from './components/client-carousel';
import { AnimationStickyNational } from './components/animation-sticky-national';
import { CheckoutNationalHero } from './components/checkout-national-hero';
import { PreviewWebMobile } from './components/preview-web-mobile';
import { ExploreTheItems } from '../checkout-global/components/explore-the-items';

const CheckoutNational = () => {
  const INFOS = [
    { title: 'Escassez', content: <></> },
    { title: 'Order Bump', content: <></> },
    { title: 'Cupom', content: <></> },
    { title: 'Prova social', content: <></> },
  ];

  return (
    <>
      <CheckoutNationalHero></CheckoutNationalHero>
      <PreviewWebMobile></PreviewWebMobile>
      <ExploreTheItems info={INFOS}></ExploreTheItems>

      <AnimationStickyNational></AnimationStickyNational>
      <ClientCarousel></ClientCarousel>
      <AnnouncementCard
        title="Pagamentos simples, experiência impecável"
        description="Com suporte para os métodos mais utilizados no Brasil, seu cliente
          compra com facilidade e sem complicação."
        className="bg-[#0a201d] border-[#085035]"
        classTitle="lg:max-w-[420px]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default CheckoutNational;
