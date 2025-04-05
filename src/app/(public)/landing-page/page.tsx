'use client';

import { StayInTouch } from '@/components/sections';
import { Footer } from '@/components';
import { LandingPageHero } from './components/landing-page-hero';
import { Diferenciais } from './components/differentials';
import { ThemeCollection } from './components/theme-collection';

const LandingPage = () => {
  return (
    <>
      <LandingPageHero></LandingPageHero>
      <Diferenciais></Diferenciais>
      <ThemeCollection></ThemeCollection>

      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
