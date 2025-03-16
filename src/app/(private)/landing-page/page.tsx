'use client';

import Header from './_components/header';
import React from 'react';
import VideoScrool from './_components/video-scrool';
import { MarqueeTools } from './_components/carousel-tools';

const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <VideoScrool></VideoScrool>
      <p className="text-base text-[#7D7D7D] w-full text-center my-6">
        Integrações e ferramentas de empresas líderes em todo o mundo
      </p>
      <MarqueeTools></MarqueeTools>
      <div className="h-96"></div>
    </>
  );
};

export default LandingPage;
