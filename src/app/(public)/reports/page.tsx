'use client';

import { CardScrollAnimation } from '@/components/card-scroll-animation';
import { ReportsHero } from './components/reports-hero';
import { GridReports } from './components/grid-reports';
import { AnimationStickyMarketing } from '../marketing/components/animation-sticky-marketing';
import { AnnouncementCard } from '../plans/components/announcement-card';
import Footer from '@/components/footer';
import StayInTouch from '@/components/sections/stay-in-touch';

const Reports = () => {
  return (
    <>
      <CardScrollAnimation imageSrc="/Dashboard.png">
        <ReportsHero></ReportsHero>
      </CardScrollAnimation>
      <GridReports></GridReports>
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

export default Reports;
