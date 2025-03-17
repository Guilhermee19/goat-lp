'use client';

import { AuroraText } from '@/components/magicui/aurora-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { WobbleCard } from '@/components/ui/wobble-card';
import Icon from '@/shared/icon/icon';

const WobbleCardDemo = ({
  text,
  description,
}: {
  text: string;
  description?: string;
}) => {
  return (
    <WobbleCard containerClassName=" h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
      <div className="max-w-xs">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {text}
        </h2>
        {description && (
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            {description}
          </p>
        )}
      </div>
    </WobbleCard>
  );
};

export default function ConvertWithoutLimit() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg p-5 mt-2">
      <div className="z-10 min-h-[600px] flex flex-col gap-4 items-center justify-center">
        <div className="group rounded-full border text-[#00FFC2] max-w-max border-[#083b34] bg-[#0A201D] text-base py-1 px-4 hover:cursor-pointer">
          Checkout Nacional
        </div>

        <p className="mt-10 text-5xl font-bold tracking-tighter flex flex-col items-center justify-center md:text-5xl lg:text-7xl">
          <AuroraText className="font-light font-hankenGrotesk text-6xl">
            Converta sem limites
          </AuroraText>
          <AuroraText className="font-light font-hankenGrotesk text-6xl">
            no Brasil
          </AuroraText>
        </p>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="max-w-2xl w-11/12 text-white text-center mt-8 text-xl font-sourceSans3 font-normal"
        >
          Venda mais, sem barreiras. Nosso checkout foi projetado para eliminar
          fricções e garantir conversões absurdas.
        </TextAnimate>

        <div className="flex items-center gap-4 mt-10">
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
            background="#191919"
          >
            <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>

        <div className="w-full grid grid-cols-4 gap-4 mt-14">
          <WobbleCardDemo text="Recuperação de venda"></WobbleCardDemo>
          <WobbleCardDemo text="Segurança de ponta"></WobbleCardDemo>
          <div className="col-span-2">
            <WobbleCardDemo text="Pagamentos instantâneos"></WobbleCardDemo>
          </div>
          <WobbleCardDemo text="Processamento Ultra Rápido"></WobbleCardDemo>
          <div className="col-span-2">
            <WobbleCardDemo text="Integrações"></WobbleCardDemo>
          </div>
          <WobbleCardDemo text="Venda no mundo todo"></WobbleCardDemo>
        </div>
      </div>
    </div>
  );
}
