'use client';

import { StayInTouch } from '@/components/sections';
import { Footer } from '@/components';
import { LandingPageHero } from './components/landing-page-hero';
import { Diferenciais } from './components/differentials';
import { ThemeCollection } from './components/theme-collection';
import { AnnouncementCard } from '../plans/components/announcement-card';
import { MapPoints } from './components/map-points';

const LandingPage = () => {
  return (
    <>
      <LandingPageHero></LandingPageHero>
      <Diferenciais></Diferenciais>
      <ThemeCollection></ThemeCollection>

      <MapPoints
        title="Velocidade. Segurança. Confiabilidade."
        description="Então, não importa se você está fazendo uma grande entrega ou
            lançando em um novo país, você sabe que sua loja é segura, confiável
            e está funcionando rápido."
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
