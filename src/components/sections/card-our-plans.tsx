'use client';

import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import Icon from '@/shared/icon/icon';

export function CardOurPlans() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto lg:p-5 rounded-[43px] mt-20 overflow-hidden">
      <div className="bg-ourPlansCard bg-left rounded-[43px] bg-no-repeat bg-cover">
        <div className="w-full flex flex-col justify-center items-end bg-gradient-to-r from-[rgba(10,10,10,0.4)] to-[rgba(38,38,38,0.4)] py-9 px-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="rounded-full border max-w-max border-[#5d824f] bg-[#0A201D]">
              <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
                Goatcom
              </p>
            </div>

            <p className="!font-light font-hankenGrotesk text-3xl md:text-5xl text-white">
              O segredo dos que mais vendem está aqui
            </p>

            <div>
              <TextAnimate
                animation="slideUp"
                by="word"
                className=" text-white text-left text-lg font-sourceSans3 font-normal"
              >
                Os top players do mercado não compartilham esse segredo…
              </TextAnimate>

              <TextAnimate
                animation="slideUp"
                by="word"
                className=" text-white text-left text-lg font-sourceSans3 font-normal"
              >
                mas agora ele é seu.
              </TextAnimate>
            </div>

            <ShimmerButton
              className="shadow-2xl min-w-max py-2 w-full lg:w-max"
              background="#fff"
            >
              <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-black font-hankenGrotesk lg:text-lg">
                Conheça nossos planos
                <Icon name="arrow_right" className="size-4"></Icon>
              </span>
            </ShimmerButton>

            <p className="text-xs text-white font-light">
              Acelere suas vendas como nunca antes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
