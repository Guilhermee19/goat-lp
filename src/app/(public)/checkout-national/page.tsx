'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnnouncementCard } from '../plans/components/announcement-card';
import Footer from '@/components/footer';
import { ClientCarousel } from './components/client-carousel';
import { AnimationStickyNational } from './components/animation-sticky-national';
import { CheckoutNationalHero } from './components/checkout-national-hero';
import { PreviewWebMobile } from './components/preview-web-mobile';
import { ExploreTheItems } from '../checkout-global/components/explore-the-items';

const EscassesCard = () => {
  return (
    <div className="bg-[#1d1d1d] p-4 rounded-2xl">
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

const OrderBumpCard = () => {
  return (
    <div className="bg-[#1d1d1d] p-4 rounded-2xl">
      <p className="font-hankenGrotesk font-light text-4xl text-white">
        Order Bump
      </p>

      <div className="bg-[#393939] p-2 border-2 border-dotted border-[#FFFFFF33] rounded-xl mt-4 flex items-end gap-2">
        <p>Olha só isso!</p>
      </div>
    </div>
  );
};

const CheckoutNational = () => {
  const INFOS = [
    {
      title: 'Escassez',
      content: <EscassesCard></EscassesCard>,
    },
    {
      title: 'Order Bump',
      content: <OrderBumpCard></OrderBumpCard>,
    },
    { title: 'Cupom', content: <div className="p-5 rounded-2xl"> TESTE</div> },
    {
      title: 'Prova social',
      content: <div className="p-5 rounded-2xl"> TESTE</div>,
    },
  ];

  return (
    <>
      <CheckoutNationalHero></CheckoutNationalHero>
      <PreviewWebMobile></PreviewWebMobile>
      <ExploreTheItems
        title={
          <p className="text-white text-4xl lg:text-6xl text-left !font-light font-hankenGrotesk mb-6">
            <span className="whitespace-pre-wrap tracking-tighter bg-gradient-to-br from-[#FF7F00] from-40% to-[#508FF4] to-80% text-transparent bg-clip-text">
              Aumente seus resultados
            </span>
            com recursos que irão turbinar suas vendas!
          </p>
        }
        info={INFOS}
      ></ExploreTheItems>

      <AnimationStickyNational></AnimationStickyNational>
      <ClientCarousel></ClientCarousel>
      <AnnouncementCard
        title="Pagamentos simples, experiência impecável"
        description="Com suporte para os métodos mais utilizados no Brasil, seu cliente
          compra com facilidade e sem complicação."
        className="bg-[#0a201d] border-[#085035]"
        classTitle="lg:max-w-[420px]"
      ></AnnouncementCard>
      <StayInTouch></StayInTouch>
      <Footer></Footer>
    </>
  );
};

export default CheckoutNational;
