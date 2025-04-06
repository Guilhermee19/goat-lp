'use client';

import { Footer } from '@/components';
import { CardCreateAccount, StayInTouch } from '@/components/sections';
import { AnimationStickyMarketing } from '../marketing/components/animation-sticky-marketing';
import { GlobalSalesHero } from './components/global-sales-hero';
import { EcommerceGrowthTools } from './components/ecommerce-growth-tools';

const GlobalSales = () => {
  return (
    <>
      <GlobalSalesHero></GlobalSalesHero>
      <EcommerceGrowthTools></EcommerceGrowthTools>
      <AnimationStickyMarketing></AnimationStickyMarketing>

      <CardCreateAccount
        title="Venda mais. Venda melhor. Venda como um GOAT!"
        description="O sucesso deixa pistas. Siga o caminho dos que mais faturam."
      ></CardCreateAccount>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default GlobalSales;
