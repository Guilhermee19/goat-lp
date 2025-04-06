'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnimationStickyCard } from '../landing-page/components/animation-sticky-card';
import { AnnouncementCard } from '../plans/components/announcement-card';
import { PersonalisedThemes } from './components/personalised-themes';
import { ThemesHero } from './components/themes-hero';
import Footer from '@/components/footer';

const Themes = () => {
  return (
    <>
      <ThemesHero></ThemesHero>
      <PersonalisedThemes></PersonalisedThemes>
      <AnimationStickyCard></AnimationStickyCard>
      <AnnouncementCard
        title="Uma plataforma construída para crescimento"
        description="Checkout de alta conversão, integrações com ferramentas de marketing, métricas detalhadas e suporte especializado para 
que você escale de forma consistente."
        className="bg-[#170921] border-[rgba(141,93,245,0.2)]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default Themes;
