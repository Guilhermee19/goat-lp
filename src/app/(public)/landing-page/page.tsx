'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnnouncementCard } from '../plans/components/announcement-card';
import { AnimationStickyCard } from './components/animation-sticky-card';
import { Diferenciais } from './components/differentials';
import { LandingPageHero } from './components/landing-page-hero';
import { MapPoints } from './components/map-points';
import { ThemeCollection } from './components/theme-collection';
import Footer from '@/components/footer';

const LandingPage = () => {
  return (
    <>
      <LandingPageHero></LandingPageHero>
      <Diferenciais></Diferenciais>
      <ThemeCollection></ThemeCollection>

      <AnimationStickyCard></AnimationStickyCard>
      <MapPoints
        title="Velocidade. Segurança. Confiabilidade."
        description="Então, não importa se você está fazendo uma grande entrega ou
            lançando em um novo país, você sabe que sua loja é segura, confiável
            e está funcionando rápido."
        url="/points-map.png"
        url_mobile="/points-map-mobile.png"
      ></MapPoints>
      <AnnouncementCard
        title="Utilize landing pages para potencializar suas vendas"
        description="Lançamentos de produtos, campanhas de tráfego pago, captura de leads e vendas diretas."
        className="bg-[#170921] border-[rgba(141,93,245,0.2)]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
