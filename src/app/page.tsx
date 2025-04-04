'use client';

import React from 'react';
import {
  CardCreateAccount,
  Functionalities,
  GlobalCheckout,
  LandingPage,
  MarqueeTools,
  NationalCheckout,
  OnlineShop,
  ScrollVelocity,
  SlideRevolutionizing,
  Testimonials,
  VideoScrool,
  WebsiteThemes,
  CardOurPlans,
  StayInTouch,
} from '../components/sections';
import { Footer } from '@/components';

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
      <CardCreateAccount></CardCreateAccount>
      <Testimonials></Testimonials>
      <CardOurPlans></CardOurPlans>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};
export default Home;
