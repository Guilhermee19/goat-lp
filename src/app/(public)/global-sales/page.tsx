'use client';

import { CardCreateAccount } from '@/components/sections/card-create-account';
import { AnimationStickyMarketing } from '../marketing/components/animation-sticky-marketing';
import { EcommerceGrowthTools } from './components/ecommerce-growth-tools';
import { GlobalSalesHero } from './components/global-sales-hero';
import { StayInTouch } from '@/components/sections/stay-in-touch';
import Footer from '@/components/footer';

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
