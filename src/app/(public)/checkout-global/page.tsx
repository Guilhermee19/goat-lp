'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnnouncementCard } from '../plans/components/announcement-card';
import Footer from '@/components/footer';
import { ClientCarousel } from '../checkout-national/components/client-carousel';
import { CheckoutGlobalHero } from './components/checkout-global-hero';
import { PreviewWebMobile } from '../checkout-national/components/preview-web-mobile';
import { AnimationStickyGlobal } from './components/animation-sticky-global';
import { GlobalCheckout } from '@/components/sections/global-checkout';
import { ExploreTheItems } from './components/explore-the-items';

const EscassesCard = () => {
  return (
    <div className="relative bg-[#1d1d1d] p-4 rounded-2xl z-50">
      <p className="font-hankenGrotesk font-light text-4xl text-white">
        Escassez
      </p>

      <div className="bg-[#393939] p-2 rounded-xl mt-4 flex items-end gap-2">
        <div>
          <p className="text-white font-sourceSans3 font-semibold text-lg">
            Produto com alta produra!
          </p>
          <p className="text-white font-sourceSans3 font-light text-base">
            Você deve finalizar seu pedido em:
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="bg-white px-2 text-sm rounded-3xl text-[#393939]">00</p>
          <p>:</p>
          <p className="bg-white px-2 text-sm rounded-3xl text-[#393939]">19</p>
        </div>
      </div>
    </div>
  );
};

const CheckoutGlobal = () => {
  const INFOS = [
    {
      title: 'Múltiplos idiomas',
      value: '0',
      content: <EscassesCard></EscassesCard>,
    },
    {
      title: 'Múltiplas moedas',
      value: '1',
      content: <EscassesCard></EscassesCard>,
    },
  ];

  return (
    <>
      <CheckoutGlobalHero></CheckoutGlobalHero>
      <PreviewWebMobile></PreviewWebMobile>
      <ExploreTheItems
        title={
          <p className="text-white text-4xl lg:text-6xl text-left !font-light font-hankenGrotesk mb-6">
            <span className="whitespace-pre-wrap tracking-tighter bg-gradient-to-br from-[#FF7F00] from-40% to-[#508FF4] to-80% text-transparent bg-clip-text">
              Explore os itens{' '}
            </span>
            que ajudam a aumentar seu ticket médio
          </p>
        }
        info={INFOS}
      ></ExploreTheItems>
      <GlobalCheckout></GlobalCheckout>

      <AnimationStickyGlobal></AnimationStickyGlobal>
      <ClientCarousel></ClientCarousel>

      <AnnouncementCard
        title="Pagamentos simples, experiência impecável"
        description="Com suporte para os métodos mais utilizados no Brasil, seu cliente
          compra com facilidade e sem complicação."
        className="bg-[#0a201d] border-[#085035]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default CheckoutGlobal;
