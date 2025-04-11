'use client';

import CardCreateAccount from '@/components/sections/card-create-account';
import { AnimationStickyMarketing } from '../marketing/components/animation-sticky-marketing';
import { EcommerceGrowthTools } from './components/ecommerce-growth-tools';
import { GlobalSalesHero } from './components/global-sales-hero';
import Footer from '@/components/footer';
import StayInTouch from '@/components/sections/stay-in-touch';

const GlobalSales = () => {
  return (
    <>
      <GlobalSalesHero></GlobalSalesHero>
      <div className="relative z-20 bg-black">
        <EcommerceGrowthTools></EcommerceGrowthTools>
        <AnimationStickyMarketing></AnimationStickyMarketing>

        <CardCreateAccount
          title="Venda mais. Venda melhor. Venda como um GOAT!"
          description="O sucesso deixa pistas. Siga o caminho dos que mais faturam."
        ></CardCreateAccount>
        <StayInTouch></StayInTouch>
        <Footer></Footer>
      </div>
    </>
  );
};

export default GlobalSales;
