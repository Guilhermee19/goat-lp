'use client';

import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { AuroraText } from '@/components/magicui/aurora-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';

const Header = () => {
  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image: 'https://avatars.githubusercontent.com/u/16860528',
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image: 'https://avatars.githubusercontent.com/u/20110627',
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image: 'https://avatars.githubusercontent.com/u/106103625',
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: 'https://avatars.githubusercontent.com/u/59228569',
    },
    {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image: 'https://avatars.githubusercontent.com/u/59228562',
    },
    {
      id: 6,
      name: 'Dora',
      designation: 'The Explorer',
      image: 'https://avatars.githubusercontent.com/u/59228568',
    },
  ];

  return (
    <>
      <div className="bg-background shadow-lg rounded-lg p-5 mt-2 w-full">
        <div className="z-10 min-h-[600px] flex flex-col gap-4 items-center justify-center">
          <div
            className={cn(
              'group rounded-full border max-w-max border-black/5 bg-bgSecondary text-base transition-all ease-in hover:cursor-pointer ',
            )}
          >
            <AnimatedShinyText className="w-full max-w-max inline-flex items-center justify-center px-4 py-1  transition ease-out">
              <span className="flex items-center text-base text-main">
                <Icon name="zap" className="size-5"></Icon> Goatcom
              </span>
              <span className="flex items-center text-white text-base w-amx mx-2">
                Explore os nossos planos e comece a vender hoje mesmo
              </span>
              <Icon
                name="arrow_right"
                className="size-4 ml-1 transition-transform text-main duration-300 ease-in-out group-hover:translate-x-0.5"
              ></Icon>
            </AnimatedShinyText>
          </div>

          <p className="mt-10 text-4xl font-bold tracking-tighter flex flex-col items-center justify-center md:text-5xl lg:text-7xl">
            <AuroraText className="font-light font-hankenGrotesk text-6xl">
              Venda mais. venda melhor.
            </AuroraText>
            <AuroraText className="font-light font-hankenGrotesk text-6xl">
              Seja um GOAT.
            </AuroraText>
          </p>

          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-white text-center mt-8 text-lg font-sourceSans3 font-normal"
          >
            Simples, rápido e sem complicação. Tudo o que você precisa para
            escalar.
          </TextAnimate>

          <div className="mt-14 flex gap-14 items-center">
            <ShimmerButton className="shadow-2xl" background="#FF5500">
              <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Criar sua conta{' '}
                <Icon name="arrow_right" className="size-4"></Icon>
              </span>
            </ShimmerButton>

            <div className="flex items-center gap-2">
              <div className="flex flex-row items-center justify-center w-full">
                <AnimatedTooltip items={people} />
              </div>

              {/* <div className="w-max">
                <div className="flex items-center gap-1">
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                </div>
                <span> São +2000 clientes </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
