'use client';

import { ShimmerButton } from '@/components/magicui/shimmer-button';
import TextAnimationDegrade from '../title-animation';
import Icon, { icons } from '@/shared/icon/icon';
import { cn } from '@/lib/utils';

function GridInfo({
  icon,
  title,
  description,
  classGrid,
}: {
  icon: keyof typeof icons;
  title: string;
  description: string;
  classGrid: string;
}) {
  return (
    <div
      className={cn(
        'p-6 rounded-lg bg-[#1d1d1d] my-4 col-span-3 flex flex-col justify-center items-start',
        classGrid,
      )}
    >
      <div className="size-max aspect-square rounded-lg bg-[#6a42eb] p-3">
        <Icon name={icon} className="text-white size-7" />
      </div>
      <p className="text-xl text-white font-light mt-1">{title}</p>
      <p className="text-lg text-white opacity-60 font-light mt-2">
        {description}
      </p>
    </div>
  );
}

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

        <div className="w-full grid grid-cols-10 grid-rows-2 gap-x-8 mt-10">
          <GridInfo
            icon="toggle_off"
            title="Construa sem precisar de código"
            description="Interface arrasta e solta para páginas estratégicas prontas em
              minutos."
            classGrid="col-span-3"
          ></GridInfo>

          <div className="rounded-xl bg-[#7c5cd2] row-span-2 col-span-4 overflow-hidden">
            <img
              src="aba-navegador.png"
              className="size-full"
              alt="Image Aba Navegador"
            />
          </div>

          <GridInfo
            icon="chart_pie_simple"
            title="Personalize do seu jeito e venda seu produto"
            description="Descubra o que realmente funciona para escalar suas campanhas."
            classGrid="col-span-3"
          ></GridInfo>

          <GridInfo
            icon="loader"
            title="Carregamento instantâneo"
            description="Páginas otimizadas para velocidade máxima e conversão absurda."
            classGrid="col-span-3"
          ></GridInfo>

          <GridInfo
            icon="table_pivot_edit"
            title="Design responsivo e imbatível"
            description="Experiência impecável no mobile e desktop, porque cada clique
              conta."
            classGrid="col-span-3"
          ></GridInfo>
        </div>
      </div>
    </div>
  );
}
