'use client';

import Footer from '@/components/footer';
import { AppsAndIntegrationsHero } from './components/apps-and-integrations-hero';
import { AnnouncementCard } from '../plans/components/announcement-card';
import { StayInTouch } from '@/components/sections/stay-in-touch';
import { PaymentApis } from './components/payment-apis';

const AppsAndIntegrations = () => {
  return (
    <>
      <AppsAndIntegrationsHero></AppsAndIntegrationsHero>
      <div className="relative z-20 bg-black">
        <PaymentApis></PaymentApis>
        <AnnouncementCard
          title="Uma plataforma construída para crescimento"
          description="Checkout de alta conversão, integrações com ferramentas de marketing, métricas detalhadas e suporte especializado para 
que você escale de forma consistente."
          className="bg-[#1D0E18] border-transparent"
          classBorder="p-px bg-gradient-to-r from-[#F987D9] via-[#EA5DC4] to-[#CF13A0]"
        ></AnnouncementCard>

        <StayInTouch></StayInTouch>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AppsAndIntegrations;
