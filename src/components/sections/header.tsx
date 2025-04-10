'use client';

import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
// import TextAnimationDegrade from '../../app/_components/title-animation';
import GoatAnimation from '@/app/_components/goat-animation';
import { TextDegrade } from '../text-degrade';

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
      name: 'Will Smith',
      designation: 'Data Scientist',
      image: 'https://avatars.githubusercontent.com/u/80000268',
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: 'https://avatars.githubusercontent.com/u/59322969',
    },
    {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image: 'https://avatars.githubusercontent.com/u/59207568',
    },
    {
      id: 6,
      name: 'Thomas',
      designation: 'The Explorer',
      image: 'https://avatars.githubusercontent.com/u/59208568',
    },
  ];

  return (
    <>
      <div className="w-full pt-10">
        <div className="relative z-10 flex flex-col gap-12 items-center justify-start">
          <div className="degradeBorder">
            <div
              className={cn(
                'group rounded-full max-w-max bg-bgSecondary text-base transition-all ease-in hover:cursor-pointer overflow-hidden',
              )}
            >
              <AnimatedShinyText className="animatedShiny">
                <span className="flex items-center text-sm font-extralight font-sourceSans3 text-main">
                  <Icon name="zap" className="size-5"></Icon>{' '}
                  <span className="hidden lg:block">Goatcom</span>
                </span>
                <span className="hidden lg:flex items-center text-white font-extralight font-sourceSans3 text-xs lg:text-sm w-max mx-2">
                  Explore os nossos planos e comece a vender hoje mesmo
                </span>
                <span className="flex lg:hidden items-center text-white font-extralight font-sourceSans3 text-xs lg:text-sm w-max mx-2">
                  Explore e comece a vender hoje mesmo
                </span>
                <Icon
                  name="arrow_right"
                  className="size-4 ml-1 transition-transform text-main duration-300 ease-in-out group-hover:translate-x-0.5"
                ></Icon>
              </AnimatedShinyText>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-8">
            <TextDegrade
              text="Venda mais. Venda melhor. Seja um GOAT."
              className="max-w-3xl from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
              position="center"
              size="large"
            ></TextDegrade>

            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-white text-center mt-2 text-base lg:text-xl font-sourceSans3 font-light"
            >
              Simples, rápido e sem complicação. Tudo o que você precisa para
              escalar.
            </TextAnimate>
          </div>

          <div className="flex gap-6 lg:gap-8 items-center flex-col lg:flex-row">
            <ShimmerButton
              className="shimmerButton w-full lg:w-max"
              background="#FF5500"
            >
              <span>
                Criar sua conta{' '}
                <Icon name="arrow_right" className="size-4"></Icon>
              </span>
            </ShimmerButton>

            <div className="flex items-center gap-2 flex-col lg:flex-row">
              <div className="flex flex-row items-center justify-center w-full">
                <AnimatedTooltip items={people} />
              </div>

              <div className="w-max lg:ml-4 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1">
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                  <Icon name="star" className="size-4 text-yellow-400"></Icon>
                </div>
                <p className="text-label w-max font-sourceSans3 text-base">
                  São +2000 clientes
                </p>
              </div>
            </div>
          </div>

          <div className="lg:absolute hidden lg:block  lg:-bottom-40 lg:-right-32">
            <GoatAnimation className="size-52 lg:size-72"></GoatAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
