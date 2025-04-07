'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnimationStickyCard } from '../landing-page/components/animation-sticky-card';
import { MapPoints } from '../landing-page/components/map-points';
import { AnnouncementCard } from '../plans/components/announcement-card';
import { OnlineShopHero } from './components/online-shop-hero';
import { PlatformFeatures } from './components/platform-features';
import Footer from '@/components/footer';

const OnlineShop = () => {
  return (
    <>
      <OnlineShopHero></OnlineShopHero>
      <PlatformFeatures></PlatformFeatures>
      <AnimationStickyCard></AnimationStickyCard>
      <MapPoints
        title="Velocidade. Segurança. Confiabilidade."
        description="Então, não importa se você está fazendo uma grande entrega ou
                lançando em um novo país, você sabe que sua loja é segura, confiável
                e está funcionando rápido."
        url="/points-map-2.png"
        url_mobile="/points-map-mobile-2.png"
      ></MapPoints>
      <AnnouncementCard
        title="Uma plataforma construída para crescimento"
        description="Checkout de alta conversão, integrações com ferramentas de marketing, métricas detalhadas e suporte especializado para 
que você escale de forma consistente."
        className="bg-[#1D0E18] border-[rgba(234,93,196,0.3)]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default OnlineShop;
