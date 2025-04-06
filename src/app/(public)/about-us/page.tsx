'use client';

import { CardCreateAccount } from '@/components/sections/card-create-account';
import { CardCounters } from './components/card-counters';
import { VideoHeader } from './components/video-header';
import { WhatDrivesUs } from './components/what-drives-us';
import { WhyGoatcom } from './components/why-goatcom';
import { StayInTouch } from '@/components/sections/stay-in-touch';
import Footer from '@/components/footer';

const AboutUs = () => {
  return (
    <>
      <VideoHeader></VideoHeader>
      <CardCounters></CardCounters>
      <WhatDrivesUs
        title="O que nos move"
        description="Acreditamos que empreendedores precisam de ferramentas que realmente
                  funcionam. Nossa missão é eliminar barreiras, otimizar processos e
                  garantir que cada venda seja uma experiência impecável para
                  vendedores e compradores."
      ></WhatDrivesUs>
      <WhyGoatcom></WhyGoatcom>
      <CardCreateAccount
        title="Estamos aqui para transformar seu negócio."
        description="Está pronto para vender como um verdadeiro GOAT?"
      ></CardCreateAccount>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
