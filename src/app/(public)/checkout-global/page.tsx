'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnnouncementCard } from '../plans/components/announcement-card';
import Footer from '@/components/footer';
import { ClientCarousel } from '../checkout-national/components/client-carousel';
import { CheckoutGlobalHero } from './components/checkout-global-hero';
import { PreviewWebMobile } from '../checkout-national/components/preview-web-mobile';
import { AnimationStickyGlobal } from './components/animation-sticky-global';
import { GlobalCheckout } from '@/components/sections/global-checkout';
import { ExploreTheItems } from './components/explore-the-items';

const CheckoutGlobal = () => {
  const INFOS = [
    { title: 'Múltiplos idiomas', content: <></> },
    { title: 'Múltiplas moedas', content: <></> },
  ];

  return (
    <>
      <CheckoutGlobalHero></CheckoutGlobalHero>
      <PreviewWebMobile></PreviewWebMobile>
      <ExploreTheItems info={INFOS}></ExploreTheItems>
      <GlobalCheckout></GlobalCheckout>

      <AnimationStickyGlobal></AnimationStickyGlobal>
      <ClientCarousel></ClientCarousel>

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

export default CheckoutGlobal;
