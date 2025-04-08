'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { TextDegrade } from '../text-degrade';
// import TextAnimationDegrade from '../../app/_components/title-animation';

export function Testimonials() {
  const TESTIMONIALS = [
    {
      name: 'Lucas Almeida',
      title: 'Dona de E-commerce',
      quote:
        '“A Goatcom mudou o jogo para o meu negócio. Finalmente encontrei uma plataforma simples e eficiente. Obrigado por isso!”',
    },
    {
      name: 'Lucas Almeida',
      title: 'Dona de E-commerce',
      quote:
        '"Sério, vocês salvaram meu tempo e minha paciência! A plataforma é incrível e me ajuda todos os dias."',
    },
    {
      name: 'Lucas Almeida',
      title: 'Dona de E-commerce',
      quote:
        '“A Goatcom mudou o jogo para o meu negócio. Finalmente encontrei uma plataforma simples e eficiente. Obrigado por isso!”',
    },
    {
      name: 'Lucas Almeida',
      title: 'Dona de E-commerce',
      quote:
        '"Sério, vocês salvaram meu tempo e minha paciência! A plataforma é incrível e me ajuda todos os dias."',
    },
    {
      name: 'Lucas Almeida',
      title: 'Dona de E-commerce',
      quote:
        '“A Goatcom mudou o jogo para o meu negócio. Finalmente encontrei uma plataforma simples e eficiente. Obrigado por isso!”',
    },
    {
      name: 'Lucas Almeida',
      title: 'Dona de E-commerce',
      quote:
        '"Sério, vocês salvaram meu tempo e minha paciência! A plataforma é incrível e me ajuda todos os dias."',
    },
  ];

  return (
    <div className="min-h-[600px]">
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
        <div className="z-10 flex flex-col gap-4 items-center justify-center">
          <div className="rounded-full border max-w-max border-[#01381d] bg-[#0A201D]">
            <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
              Depoimentos
            </p>
          </div>

          <TextDegrade
            text="O que os Goats tem a dizer?"
            className="lg:max-w-lg from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="center"
          ></TextDegrade>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 mt-5">
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}
