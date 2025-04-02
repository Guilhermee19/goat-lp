'use client';

import { ShimmerButton } from '@/components/magicui/shimmer-button';
import TextAnimationDegrade from '../title-animation';
import Icon from '@/shared/icon/icon';

export default function LandingPage() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg p-5 overflow-hidden">
      <div className="z-10 min-h-[600px] flex flex-col gap-4 items-center justify-center">
        <div className="rounded-full border max-w-max border-[#250e64] bg-[#170921]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#B69BFA] to-[#6A29EA] opacity-60 text-transparent bg-clip-text">
            Landing Pages
          </p>
        </div>

        <TextAnimationDegrade
          title={['Landing Pages de', 'alta conversão']}
          className="mt-5"
        ></TextAnimationDegrade>

        <p className="text-base lg:text-lg text-white ">
          Páginas que vendem por você. Criadas para capturar, engajar e
          converter.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-4 mt-10">
          <ShimmerButton
            className="shadow-2xl min-w-max py-2"
            background="#FF5500"
          >
            <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="shadow-2xl min-w-max py-2"
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
