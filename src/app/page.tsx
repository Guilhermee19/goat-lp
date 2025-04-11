'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import { CardScrollAnimation } from '@/components/card-scroll-animation';

// Usando dynamic() com importação assíncrona
const Header = dynamic(() => import('@/components/sections/header'), {
  ssr: false,
});
const SlideRevolutionizing = dynamic(
  () => import('@/components/sections/slide-revolutionizing'),
  { ssr: false },
);
const MarqueeTools = dynamic(
  () => import('@/components/sections/carousel-tools'),
  { ssr: false },
);
const Functionalities = dynamic(
  () => import('@/components/sections/functionalities'),
  { ssr: false },
);
const NationalCheckout = dynamic(
  () => import('@/components/sections/national-checkout'),
  { ssr: false },
);
const GlobalCheckout = dynamic(
  () => import('@/components/sections/global-checkout'),
  { ssr: false },
);
const ScrollVelocity = dynamic(
  () => import('@/components/sections/scroll-velocity'),
  { ssr: false },
);
const LandingPage = dynamic(
  () => import('@/components/sections/landing-page'),
  { ssr: false },
);
const WebsiteThemes = dynamic(
  () => import('@/components/sections/website-themes'),
  { ssr: false },
);
const OnlineShop = dynamic(() => import('@/components/sections/online-shop'), {
  ssr: false,
});
const CardCreateAccount = dynamic(
  () => import('@/components/sections/card-create-account'),
  { ssr: false },
);
const Testimonials = dynamic(
  () => import('@/components/sections/testimonials'),
  { ssr: false },
);
const CardOurPlans = dynamic(
  () => import('@/components/sections/card-our-plans'),
  { ssr: false },
);
const StayInTouch = dynamic(
  () => import('@/components/sections/stay-in-touch'),
  { ssr: false },
);

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>

      <CardScrollAnimation imageSrc="/dashboard.png">
        <Header></Header>
      </CardScrollAnimation>

      <MarqueeTools></MarqueeTools>
      <Functionalities></Functionalities>
      <SlideRevolutionizing key={0}></SlideRevolutionizing>
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
