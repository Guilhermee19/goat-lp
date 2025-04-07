'use client';

import { StayInTouch } from '@/components/sections/stay-in-touch';
import { AnnouncementCard } from '../plans/components/announcement-card';
import Footer from '@/components/footer';
import { ClientCarousel } from './components/client-carousel';
import { AnimationStickyNational } from './components/animation-sticky-national';
import { CheckoutNationalHero } from './components/checkout-national-hero';
import { PreviewWebMobile } from './components/preview-web-mobile';
import { ExploreTheItems } from '../checkout-global/components/explore-the-items';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Icon from '@/shared/icon/icon';

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

const OrderBumpCard = () => {
  return (
    <div className="relative min-w-[440px] z-50 bg-[#1d1d1d] p-6 rounded-2xl">
      <p className="font-hankenGrotesk font-light text-4xl text-white">
        Order Bump
      </p>

      <div className="bg-[#393939] p-6 border-2 border-dotted border-[#FFFFFF33] rounded-xl mt-4 gap-2">
        <p className="text-white text-2xl font-light">Olha só isso!</p>
        <p className="text-white font-light my-2">
          Promoção imperdível só hoje:
        </p>

        <div className="flex items-center justify-start my-10 ml-4 gap-4">
          <Image
            src={'/product.png'}
            width={86}
            height={86}
            alt="Product"
            className="size-24 object-contain"
          ></Image>

          <div className="flex flex-col gap-1">
            <p className="text-white text-xl font-semibold">Tênis de corrida</p>
            <p className="text-white text-lg m-0  font-light line-through">
              R$ 1.000,00
            </p>
            <p className="text-white text-2xl font-light"> R$ 900,00 </p>
          </div>
        </div>

        <Button className="w-full shadow-2xl min-w-max py-3 rounded-full flex justify-center items-center text-center bg-main text-white">
          Teste grátis por 7 dias
        </Button>
      </div>
    </div>
  );
};

const CupomCard = () => {
  return (
    <div className="relative min-w-[440px] z-50 bg-[#1d1d1d] p-6 rounded-2xl">
      <p className="font-hankenGrotesk font-light text-4xl text-white">Cupom</p>

      <div className="bg-[#393939] p-6 border-2 border-dotted border-[#FFFFFF33] rounded-xl mt-4 gap-2">
        <p className="text-white text-2xl font-light flex items-center gap-3">
          <Icon name="cart_shopping" className="size-6"></Icon> Seu carrinho{' '}
        </p>

        <div className="flex items-center justify-start mt-6 gap-4 border border-solid border-[#ffffff33] p-3 rounded-md">
          <Image
            src={'/product.png'}
            width={86}
            height={86}
            alt="Product"
            className="size-24 object-contain"
          ></Image>

          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex justify-between items-start">
              <p className="text-white text-xl font-semibold">
                Tênis de corrida
              </p>
              <Icon name="trash_can" className="size-4"></Icon>
            </div>
            <p className="text-white text-lg m-0  font-light">R$ 1.000,00</p>

            <div className="w-max flex items-center gap-1 border border-solid border-[#ffffff33] py-1 px-3 rounded-md">
              <p className="w-4 m-0 leading-none"> - </p>
              <p className="w-4 m-0 leading-none"> 2 </p>
              <p className="w-4 m-0 leading-none"> + </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-start mt-6 gap-2 border border-solid border-[#ffffff33] p-3 rounded-md">
          <div className="w-full flex items-center justify-start gap-4 border mb-2 border-solid border-[#ffffff33] pl-3 rounded-lg">
            <p className="text-label"> Cupom de desconto </p>

            <Button className="w-max shadow-2xl min-w-max py-3 rounded-lg m-0 ml-auto flex justify-center items-center text-center bg-main text-white">
              Aplicar
            </Button>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-white"> Produtos </p>
            <p className="text-white"> R$ 90,00 </p>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-white"> Desconto </p>
            <p className="text-white"> -R$ 10,00 </p>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-white"> Frete </p>
            <p className="text-white"> R$ 0,00 </p>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-white"> Total </p>
            <p className="text-white"> R$ 100,00 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProvaSocialCard = () => {
  return (
    <div className="relative min-w-[440px] z-50 bg-[#1d1d1d] p-6 rounded-2xl">
      <p className="font-hankenGrotesk font-light text-4xl text-white">
        Prova social
      </p>

      <div className="bg-[#393939] p-6 rounded-xl mt-4 gap-2">
        <div className="flex items-center justify-start rounded-md gap-4 p-4 bg-[#626262]">
          <Image
            src={'/product.png'}
            width={86}
            height={86}
            alt="Product"
            className="size-24 object-contain rounded-full"
          ></Image>

          <div className="flex flex-col gap-1">
            <p className="text-white text-sm font-light"> Marcela Silva </p>

            <div className="flex items-center gap-1">
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
            </div>

            <p className="text-white text-sm font-light w-11/12">
              Chegou rápido e a qualidade é excelente!{' '}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start rounded-md gap-4 p-4 bg-[#626262] mt-4">
          <Image
            src={'/product.png'}
            width={86}
            height={86}
            alt="Product"
            className="size-24 object-contain rounded-full"
          ></Image>

          <div className="flex flex-col gap-1">
            <p className="text-white text-sm font-light"> Marcela Silva </p>

            <div className="flex items-center gap-1">
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
              <Icon name="star" className="text-yellow-400 size-4"></Icon>
            </div>

            <p className="text-white text-sm font-light w-11/12">
              Chegou rápido e a qualidade é excelente!{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutNational = () => {
  const INFOS = [
    {
      title: 'Escassez',
      value: '0',
      content: <EscassesCard></EscassesCard>,
    },
    {
      title: 'Order Bump',
      value: '1',
      content: <OrderBumpCard></OrderBumpCard>,
    },
    { title: 'Cupom', value: '2', content: <CupomCard></CupomCard> },
    {
      title: 'Prova social',
      value: '3',
      content: <ProvaSocialCard></ProvaSocialCard>,
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
