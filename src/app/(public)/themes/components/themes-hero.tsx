'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextDegrade } from '@/components/text-degrade';
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
    <div className="lg:sticky lg:top-[50px] z-10 w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-[120px] overflow-hidden">
      <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-8">
        <div className="rounded-full border max-w-max border-[#361428] bg-[#1D0E18]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#F187DC] to-[#C615A3] opacity-60 text-transparent bg-clip-text">
            Temas
          </p>
        </div>

        <div>
          <TextDegrade
            text="Escolha o tema ideal para sua empresa"
            className=" from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
            size="medium"
          ></TextDegrade>

          <TextAnimate
            animation="slideUp"
            by="word"
            className="max-w-4xl text-white text-left text-lg font-sourceSans3 font-normal"
          >
            Procure um design com as características de que você mais precisa e
            personalize-o para ficar com a cara da sua empresa.
          </TextAnimate>
        </div>

        <ShimmerButton
          className="w-full lg:w-max shadow-2xl min-w-max py-2"
          background="#FF5500"
        >
          <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-base">
            Crie sua conta
            <Icon name="arrow_right" className="size-4"></Icon>
          </span>
        </ShimmerButton>

        <div className="w-full grid lg:grid-cols-3 gap-4 mt-10">
          {GRID.map((el, idx) => (
            <div
              key={idx}
              className="w-full h-full bg-[#1d1d1d] border flex flex-col justify-between border-solid border-[#393939] p-6 pb-0 rounded-2xl"
            >
              <div>
                <p className="text-white text-xl lg:text-2xl font-hankenGrotesk font-light">
                  {el.title}
                </p>
                <p className="text-label text-base lg:text-lg font-sourceSans3 !leading-[1.1] mt-4">
                  {el.description}
                </p>
              </div>

              <Image
                src={el.url}
                width={413}
                height={370}
                alt="screen landing page"
                className="w-full mt-4 aspect-video object-bottom object-contain"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
