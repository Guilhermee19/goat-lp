'use client';

import Header from './_components/header';
import React from 'react';
import VideoScroll from './_components/video-carousel';

const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <VideoScroll></VideoScroll>
      <p className="text-base text-[#7D7D7D] w-full text-center my-6">
        Integrações e ferramentas de empresas líderes em todo o mundo
      </p>
      <div className="h-96"></div>
    </>
  );
};

export default LandingPage;
