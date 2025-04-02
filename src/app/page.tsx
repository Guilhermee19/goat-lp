'use client';

import React from 'react';
import VideoScrool from './_components/sections/video-scrool';
import { MarqueeTools } from './_components/sections/carousel-tools';
import { Functionalities } from './_components/sections/functionalities';
import SlideRevolutionizing from './_components/sections/slide-revolutionizing';
import NationalCheckout from './_components/sections/national-checkout';
import GlobalCheckout from './_components/sections/global-checkout';
import ScrollVelocity from './_components/sections/scroll-velocity';
import LandingPage from './_components/sections/landing-page';

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
      <div className="h-96"></div>
    </>
  );
};
export default Home;
