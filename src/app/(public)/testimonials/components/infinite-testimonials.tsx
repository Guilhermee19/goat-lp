'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function InfiniteTestimonials() {
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
    <>
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center gap-2 rounded-lg p-5 overflow-hidden">
        <p className="font-light font-hankenGrotesk text-center text-white text-3xl md:text-4xl lg:text-5xl">
          Outros depoimentos de nossos clientes
        </p>
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
    </>
  );
}
