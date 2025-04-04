'use client';

import { TextAnimate } from '@/components/magicui/text-animate';
import TextAnimationDegrade from '../title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Icon from '@/shared/icon/icon';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function CardGrid({
  title,
  description,
  url,
  className,
  classImage,
}: {
  title: string;
  description: string;
  url: string;
  className?: string;
  classImage?: string;
}) {
  return (
    <div
      className={cn(
        'size-full border border-solid border-gray bg-grayDark rounded-2xl p-6 flex flex-col justify-center items-start',
        className,
      )}
    >
      <p className="text-white text-2xl font-light"> {title} </p>
      <p className="text-label text-lg font-light"> {description} </p>

      <Image
        src={url}
        width={300}
        height={300}
        alt={title}
        className={cn('w-full object-contain mt-6', classImage)}
      />
    </div>
  );
}

export function OnlineShop() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 overflow-hidden">
      <div className="z-10 min-h-[600px] flex flex-col gap-4 items-center justify-center">
        <div className="rounded-full border max-w-max border-[#3c132e] bg-[#1d0e18]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#F187DC] to-[#C615A3] opacity-60 text-transparent bg-clip-text">
            Loja Virtual
          </p>
        </div>

        <TextAnimationDegrade
          title={['E-commerce pronto para escalar']}
          className="mt-5 hidden lg:flex"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="lg:max-w-2xl lg:w-11/12 text-white text-center mt-4 text-lg font-sourceSans3 font-normal"
        >
          Sua loja, seu império. Uma estrutura otimizada para vender 24/7.
        </TextAnimate>

        <div className="w-full lg:w-max flex items-center flex-col lg:flex-row gap-4 mt-5">
          <ShimmerButton
            className="shadow-2xl min-w-max py-2 w-full lg:w-max"
            background="#FF5500"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-black font-hankenGrotesk lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="shadow-2xl min-w-max py-2 w-full lg:w-max"
            background="#191919"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-black font-hankenGrotesk lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>

        <div className="w-full grid lg:grid-cols-3 gap-4 mt-8">
          <CardGrid
            title="Criação rápida e intuitiva"
            description="Suba seus produtos e comece a vender em minutos."
            url="quick-creation.png"
          />
          <CardGrid
            title="Layouts otimizados para conversão"
            description="Uma experiência de compra fluida para que seus clientes comprem sem hesitar."
            className="lg:col-span-2"
            url="optimized-layouts.png"
          />
          <CardGrid
            title="Automação de vendas e remarketing"
            description="Integrações poderosas para escalar faturamento no automático."
            url="sales-automation.png"
            classImage="!min-h-[233px]"
          />
          <CardGrid
            title="Funis inteligentes"
            description="Order bumps, upsells e downsells para aumentar o ticket médio sem esforço."
            url="smart-funnels.png"
            classImage="!max-h-[270px] max-w-[335px]"
          />
          <CardGrid
            title="Checkout Personalizado "
            description="Integre rapidamente o checkout e venda todos os dias."
            url="custom-checkout.png"
            classImage="!max-h-[270px]"
          />
        </div>
      </div>
    </div>
  );
}
