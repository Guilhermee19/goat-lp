'use client';

import { AnnouncementCard } from '../plans/components/announcement-card';
import Footer from '@/components/footer';
import { ClientCarousel } from './components/client-carousel';
import { AnimationStickyNational } from './components/animation-sticky-national';
import { CheckoutNationalHero } from './components/checkout-national-hero';
import { PreviewWebMobile } from './components/preview-web-mobile';
import { ExploreTheItems } from '../checkout-global/components/explore-the-items';
import Image from 'next/image';
import StayInTouch from '@/components/sections/stay-in-touch';

const EscassesCard = () => {
  return (
    <Image
      src={'/EscassesCard.png'}
      width={440}
      height={197}
      alt="EscassesCard"
    ></Image>
  );
};

const OrderBumpCard = () => {
  return (
    <Image
      src={'/OrderBumpCard.png'}
      width={440}
      height={197}
      alt="OrderBumpCard"
    ></Image>
  );
};

const CupomCard = () => {
  return (
    <Image
      src={'/CupomCard.png'}
      width={440}
      height={197}
      alt="OrderBumpCard"
    ></Image>
  );
};

const ProvaSocialCard = () => {
  return (
    <Image
      src={'/ProvaSocialCard.png'}
      width={440}
      height={197}
      alt="OrderBumpCard"
    ></Image>
  );
};

const CheckoutNational = () => {
  const INFOS = [
    {
      title: 'Escassez',
      value: '0',
      content: <EscassesCard></EscassesCard>,
    },
    {
      title: 'Order Bump',
      value: '1',
      content: <OrderBumpCard></OrderBumpCard>,
    },
    { title: 'Cupom', value: '2', content: <CupomCard></CupomCard> },
    {
      title: 'Prova social',
      value: '3',
      content: <ProvaSocialCard></ProvaSocialCard>,
    },
  ];

  return (
    <>
      <CheckoutNationalHero></CheckoutNationalHero>
      <PreviewWebMobile></PreviewWebMobile>
      <ExploreTheItems
        title={
          <p className="text-white text-4xl lg:text-8xl text-left !font-light font-hankenGrotesk mb-6">
            <span className="whitespace-pre-wrap tracking-tighter bg-gradient-to-br from-[#FF7F00] from-40% to-[#508FF4] to-80% text-transparent bg-clip-text">
              Aumente seus resultados
            </span>
            com recursos que irão turbinar suas vendas!
          </p>
        }
        info={INFOS}
      ></ExploreTheItems>

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
