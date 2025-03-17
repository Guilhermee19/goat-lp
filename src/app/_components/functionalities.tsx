'use client';

import { AuroraText } from '@/components/magicui/aurora-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { Tabs } from '@/components/ui/tabs';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function Functionalities() {
  const tabs = [
    {
      title: 'Chechout Nacional',
      value: 'nacional',
      content: <NacionalContent />,
    },
    {
      title: 'Chechout Global',
      value: 'global',
      content: <GlobalContent />,
    },
    {
      title: 'Landing Pages',
      value: 'landing-page',
      content: <LandingContent />,
    },
    {
      title: 'E-commerces',
      value: 'ecommerces',
      content: <EcommercesContent />,
    },
  ];

  return (
    <div className="w-full mt-20">
      <h2 className="font-hankenGrotesk font-extralight text-white w-full text-center text-4xl">
        <span className="underline"> Tudo que você precisa </span>, em um só
        lugar.
      </h2>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full  items-start justify-start my-40">
        <Tabs
          tabs={tabs}
          tabClassName="text-white"
          containerClassName="!w-max !mx-auto !py-2 !px-3 !justify-center !border !border-solid !border-[#393939] !rounded-full"
        />
      </div>
    </div>
  );
}

const NacionalContent = () => {
  return (
    <div className="bg-degrade-green rounded-[40px] p-16 flex items-center justify-between border border-solid border-[#393939]">
      <div className="w-1/2 max-w-max">
        <p className="w-full text-4xl font-bold tracking-tighter flex flex-col items-start justify-start md:text-5xl lg:text-7xl">
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            Converta sem
          </AuroraText>
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            limites no Brasil
          </AuroraText>
        </p>

        <p className="max-w-96 text-lg text-label">
          Processamento rápido e seguro para vendas no Brasil, aceitando Pix,
          boleto e cartões de crédito sem complicação.
        </p>

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
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="w-1/2 size-full object-contain"
        alt="Image Card Product Convert"
        src="/card product convert.png"
      ></Image>
    </div>
  );
};

const GlobalContent = () => {
  return (
    <div className="bg-degrade-blue rounded-[40px] p-16 flex items-center justify-between border border-solid border-[#393939]">
      <div className="w-1/2 max-w-max">
        <p className="w-full text-4xl font-bold tracking-tighter flex flex-col items-start justify-start md:text-5xl lg:text-7xl">
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            Venda para o
          </AuroraText>
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            mundo, sem
          </AuroraText>
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            barreiras
          </AuroraText>
        </p>

        <p className="max-w-96 text-lg text-label">
          Venda para qualquer lugar do mundo com suporte a múltiplas moedas e
          formas de pagamento internacionais.
        </p>

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
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="w-1/2 size-full object-contain"
        alt="Image Credit Card"
        src="/credit card.png"
      ></Image>
    </div>
  );
};

const LandingContent = () => {
  return (
    <div className="bg-degrade-purple rounded-[40px] p-16 flex items-center justify-between border border-solid border-[#393939]">
      <div className="w-1/2 max-w-max">
        <p className="w-full text-4xl font-bold tracking-tighter flex flex-col items-start justify-start md:text-5xl lg:text-7xl">
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            Páginas de alta
          </AuroraText>
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            conversão
          </AuroraText>
        </p>

        <p className="max-w-96 text-lg text-label">
          Páginas rápidas, responsivas e criadas para maximizar conversões.
        </p>

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
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="w-1/2 size-full object-contain"
        alt="Image High Conversion Page"
        src="/high conversion page.png"
      ></Image>
    </div>
  );
};

const EcommercesContent = () => {
  return (
    <div className="bg-degrade-red rounded-[40px] p-16 flex items-center justify-between border border-solid border-[#393939]">
      <div className="w-1/2 max-w-max">
        <p className="w-full text-4xl font-bold tracking-tighter flex flex-col items-start justify-start md:text-5xl lg:text-7xl">
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            Lojas virtuais
          </AuroraText>
          <AuroraText className="w-full font-light font-hankenGrotesk text-6xl">
            escaláveis
          </AuroraText>
        </p>

        <p className="max-w-96 text-lg text-label">
          Configure sua loja online em minutos e venda produtos físicos ou
          digitais sem limite.
        </p>

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
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex font-hankenGrotesk gap-2 items-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="w-1/2 size-full object-contain"
        alt="Image Online Stores"
        src="/online stores.png"
      ></Image>
    </div>
  );
};
