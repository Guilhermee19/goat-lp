'use client';

import React from 'react';
import VideoScrool from './_components/video-scrool';
import { MarqueeTools } from './_components/carousel-tools';
import SlideRevolutionizing from './_components/slide-revolutionizing';
import { Functionalities } from './_components/functionalities';
import ConvertWithoutLimit from './_components/convert-without-limit';
import SellToTheWorld from './_components/sell-to-the-world';

const Home = () => {
  return (
    <>
      <VideoScrool></VideoScrool>
      <MarqueeTools></MarqueeTools>
      <Functionalities></Functionalities>
      <SlideRevolutionizing></SlideRevolutionizing>
      <ConvertWithoutLimit></ConvertWithoutLimit>
      <SellToTheWorld></SellToTheWorld>
      <div className="h-96"></div>
    </>
  );
};
export default Home;
