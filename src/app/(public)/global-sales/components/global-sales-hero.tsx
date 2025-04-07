'use client';

import GoatAnimation from '@/app/_components/goat-animation';
// import TextAnimationDegrade from '@/app/_components/title-animation';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextDegrade } from '@/components/text-degrade';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';

export function GlobalSalesHero() {
  return (
    <>
      <div className="relative w-11/12 max-w-7xl mx-auto lg:min-h-[700px] bg-background shadow-lg rounded-lg py-5 lg:p-5 mt-2">
        <div className="z-10 lg:min-h-[600px] flex flex-col gap-4 items-center justify-center">
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

          <TextDegrade
            text="Venda para o mundo inteiro sem complicações"
            className="max-w-3xl from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% text-center"
          ></TextDegrade>

          {/* <TextAnimationDegrade
            title={['Venda para o mundo inteiro,', 'sem complicações']}
            className="mt-8 hidden lg:flex"
          ></TextAnimationDegrade>

          <TextAnimationDegrade
            title={['Venda para o', 'mundo inteiro,', 'sem', 'complicações']}
            className="mt-8 flex lg:hidden justify-start items-start mr-auto"
          ></TextAnimationDegrade> */}

          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-white text-start lg:text-center mt-2 text-base lg:text-xl font-sourceSans3 font-light"
          >
            Explore o mundo com a Cartpanda e leve seu negócio online para o
            próximo nível de forma fácil.
          </TextAnimate>

          <ShimmerButton
            className="shimmerButton w-full lg:w-max mt-4 lg:mt-10"
            background="#FF5500"
          >
            <span>
              Criar sua conta{' '}
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>
        </div>

        <div className="absolute bottom-0 right-0 ml-6 md:ml-0 hidden lg:block size-60 md:size-80">
          <GoatAnimation className="size-60 md:size-72" />
        </div>
      </div>
    </>
  );
}
