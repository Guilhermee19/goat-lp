'use client';

import { TextAnimate } from '@/components/magicui/text-animate';
import GoatAnimation from '../goat-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export function CardCreateAccount() {
  return (
    <div className="relative w-11/12 max-w-7xl pt-28 mx-auto lg:px-4 overflow-x-hidden">
      <div className="flex justify-between items-center flex-col-reverse lg:flex-row rounded-3xl border border-solid border-[#525252]">
        <div className="w-full lg:w-9/12 p-4 md:p-10 flex fle flex-col gap-4 items-start">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-white text-left text-xl lg:text-3xl font-hankenGrotesk font-light"
          >
            Venda mais. Venda melhor. Venda como um GOAT!
          </TextAnimate>

          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-white text-left text-sm lg:text-xl font-sourceSans3 font-normal"
          >
            O sucesso deixa pistas. Siga o caminho dos que mais faturam.
          </TextAnimate>

          <ShimmerButton
            className="shadow-2xl min-w-max py-2 w-full lg:w-max"
            background="#191919"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-black font-hankenGrotesk lg:text-lg">
              Criar uma conta
            </span>
          </ShimmerButton>
        </div>

        <div className="relative lg:absolute bottom-10 right-0 ml-6 md:ml-0 size-60 md:size-80">
          <GoatAnimation className="size-60 md:size-80" />
        </div>
      </div>
    </div>
  );
}
