'use client';

import Footer from '@/components/footer';
import { AppsAndIntegrationsHero } from './components/apps-and-integrations-hero';
import { AnnouncementCard } from '../plans/components/announcement-card';
import { StayInTouch } from '@/components/sections/stay-in-touch';

const AppsAndIntegrations = () => {
  return (
    <>
      <AppsAndIntegrationsHero></AppsAndIntegrationsHero>

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

export default AppsAndIntegrations;
