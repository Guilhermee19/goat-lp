'use client';

import Footer from '@/components/footer';
import { CardCreateAccount } from '@/components/sections/card-create-account';
import { CardOurPlans } from '@/components/sections/card-our-plans';
import { MarqueeTools } from '@/components/sections/carousel-tools';
import { Functionalities } from '@/components/sections/functionalities';
import { GlobalCheckout } from '@/components/sections/global-checkout';
import { LandingPage } from '@/components/sections/landing-page';
import { NationalCheckout } from '@/components/sections/national-checkout';
import { OnlineShop } from '@/components/sections/online-shop';
import { ScrollVelocity } from '@/components/sections/scroll-velocity';
import { SlideRevolutionizing } from '@/components/sections/slide-revolutionizing';
import { StayInTouch } from '@/components/sections/stay-in-touch';
import { Testimonials } from '@/components/sections/testimonials';
import { VideoScrool } from '@/components/sections/video-scrool';
import { WebsiteThemes } from '@/components/sections/website-themes';
import React from 'react';

const Home = () => {
  return (
    <>
      <VideoScrool></VideoScrool>
      <MarqueeTools></MarqueeTools>
      <Functionalities></Functionalities>
      <SlideRevolutionizing></SlideRevolutionizing>
      <NationalCheckout></NationalCheckout>
      <GlobalCheckout></GlobalCheckout>
      <ScrollVelocity></ScrollVelocity>
      <LandingPage></LandingPage>
      <WebsiteThemes></WebsiteThemes>
      <OnlineShop></OnlineShop>
      <CardCreateAccount
        title="Venda mais. Venda melhor. Venda como um GOAT!"
        description="O sucesso deixa pistas. Siga o caminho dos que mais faturam."
      ></CardCreateAccount>
      <Testimonials></Testimonials>
      <CardOurPlans></CardOurPlans>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};
export default Home;
