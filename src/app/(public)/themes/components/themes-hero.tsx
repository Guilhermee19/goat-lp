'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function ThemesHero() {
  const GRID = [
    {
      title: 'É muito fácil personalizar',
      description:
        'Você não precisa de experiência com desenvolvimento ou design para utilizar o editor de temas.',
      url: '/aba-cosmetico.png',
    },
    {
      title: 'Amigáveis e convertem',
      description:
        'Com poucos cliques, você personaliza uma loja profissional e faz o seu negócio decolar.',
      url: '/custom-logo.png',
    },
    {
      title: 'Rápidos e responsivos',
      description:
        'Seguimos as melhores práticas para obter um carregamento rápido das páginas de loja virtual',
      url: '/we-mobile-view.png',
    },
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
      <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
        <div className="rounded-full border max-w-max border-[#361428] bg-[#1D0E18]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#F187DC] to-[#C615A3] opacity-60 text-transparent bg-clip-text">
            Temas
          </p>
        </div>

        <div>
          <TextAnimationDegrade
            title={['Escolha o tema ideal para sua empresa']}
            className="hidden lg:flex justify-start items-start"
            classText="!text-3xl md:!text-5xl lg:!text-7xl leading-none"
          ></TextAnimationDegrade>
          <TextAnimationDegrade
            title={['Escolha o tema', 'ideal para sua', 'empresa']}
            className="flex lg:hidden justify-start items-start"
            classText="!text-4xl lg:!text-5xl"
          ></TextAnimationDegrade>

          <TextAnimate
            animation="slideUp"
            by="word"
            className=" text-white text-left text-lg font-sourceSans3 font-normal"
          >
            Procure um design com as características de que você mais precisa e
            personalize-o para ficar com a cara da sua empresa.
          </TextAnimate>
        </div>

        <ShimmerButton
          className="w-full lg:w-max shadow-2xl min-w-max py-2"
          background="#FF5500"
        >
          <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
            Crie sua conta
            <Icon name="arrow_right" className="size-4"></Icon>
          </span>
        </ShimmerButton>

        <div className="w-full grid lg:grid-cols-3 gap-4 mt-10">
          {GRID.map((el, idx) => (
            <div
              key={idx}
              className="w-full h-max bg-[#1d1d1d] border border-solid border-[#393939] p-4 pb-0 rounded-xl"
            >
              <p className="text-white text-2xl lg:text-3xl font-hankenGrotesk">
                {el.title}
              </p>
              <p className="text-label text-base lg:text-xl font-sourceSans3">
                {el.description}
              </p>

              <Image
                src={el.url}
                width={413}
                height={370}
                alt="screen landing page"
                className="size-full mt-4 aspect-video object-bottom object-contain"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
