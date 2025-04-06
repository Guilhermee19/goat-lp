'use client';

import { StayInTouch } from '@/components/sections';
import { AnnouncementCard } from '../plans/components/announcement-card';
import { MarketingHero } from './components/marketing-hero';
import { Footer } from '@/components';
import { AnimationStickyMarketing } from './components/animation-sticky-marketing';
import { GridMarketing } from './components/grid-marketing';

const Marketing = () => {
  return (
    <>
      <MarketingHero></MarketingHero>
      <GridMarketing></GridMarketing>
      <AnimationStickyMarketing></AnimationStickyMarketing>
      <AnnouncementCard
        title="Uma plataforma construída para crescimento"
        description="Checkout de alta conversão, integrações com ferramentas de marketing, métricas detalhadas e suporte especializado para 
que você escale de forma consistente."
        className="bg-[#1C191B] border-transparent"
        classBorder="p-px bg-gradient-to-r from-[#525051] via-[#353334] to-[#535052]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default Marketing;
