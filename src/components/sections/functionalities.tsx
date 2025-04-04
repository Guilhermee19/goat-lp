'use client';

import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { Tabs } from '@/components/ui/tabs';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import SwiperCoverflow from '../../app/_components/swiper-react-effect-coverflow';
import { useState } from 'react';
import TextAnimationDegrade from '../../app/_components/title-animation';

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

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-full mt-20">
      <h2 className="font-hankenGrotesk font-light text-white w-11/12 lg:w-full text-center text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-0">
        <span className="underline"> Tudo que você precisa</span>, em um só
        lugar.
      </h2>

      <div className="[perspective:1000px] relative b hidden lg:flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-14">
        <Tabs
          tabs={tabs}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex} // Passa a função setTabIndex para o Tabs
          tabClassName="text-white"
          containerClassName="!w-max !mx-auto !py-2 !px-3 !justify-center !border !border-solid !border-gray !rounded-full"
        />
      </div>

      <SwiperCoverflow
        tabs={tabs}
        tabIndex={tabIndex} // Passa o tabIndex para o SwiperCoverflow
        setTabIndex={setTabIndex} // Passa a função setTabIndex para o SwiperCoverflow
      />
    </div>
  );
}

const NacionalContent = () => {
  return (
    <div className="w-11/12 mx-auto lg:w-full bg-degrade-green rounded-[40px] p-6 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between border border-solid border-gray">
      <div className="relative z-50 w-full lg:w-1/2 max-w-max">
        <TextAnimationDegrade
          title={['Converta sem', 'limites no Brasil']}
          className="items-start"
          classText="text-3xl md:text-5xl lg:text-7xl"
        ></TextAnimationDegrade>

        <p className="max-w-96 text-base lg:text-lg text-label mt-2 lg:mt-0">
          Processamento rápido e seguro para vendas no Brasil, aceitando Pix,
          boleto e cartões de crédito sem complicação.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-4 mt-10">
          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#FF5500"
          >
            white
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="max-w-60 w-11/12 lg:w-1/2 size-full object-contain"
        alt="Image Card Product Convert"
        src="/card product convert.png"
      ></Image>
    </div>
  );
};

const GlobalContent = () => {
  return (
    <div className="w-11/12 mx-auto lg:w-full bg-degrade-blue rounded-[40px] p-6 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between border border-solid border-gray">
      <div className="relative z-50 w-full lg:w-1/2 max-w-max">
        <TextAnimationDegrade
          title={['Venda para o', 'mundo, sem', 'barreiras']}
          className="items-start hidden lg:flex"
          classText="text-3xl md:text-5xl lg:text-7xl"
        ></TextAnimationDegrade>

        <TextAnimationDegrade
          title={['Venda para o mundo,', 'sem barreiras']}
          className="items-start flex lg:hidden"
          classText="text-3xl md:text-5xl lg:text-7xl"
        ></TextAnimationDegrade>

        <p className="max-w-96 text-base lg:text-lg text-label mt-2 lg:mt-0">
          Venda para qualquer lugar do mundo com suporte a múltiplas moedas e
          formas de pagamento internacionais.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-4 mt-10">
          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#FF5500"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="max-w-60 w-11/12 lg:w-1/2 size-full object-contain"
        alt="Image Credit Card"
        src="/credit card.png"
      ></Image>
    </div>
  );
};

const LandingContent = () => {
  return (
    <div className="w-11/12 mx-auto lg:w-full bg-degrade-purple rounded-[40px] p-6 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between border border-solid border-gray">
      <div className="relative z-50 w-full lg:w-1/2 max-w-max">
        <TextAnimationDegrade
          title={['Páginas de alta', 'conversão']}
          className="items-start"
          classText="text-3xl md:text-5xl lg:text-7xl"
        ></TextAnimationDegrade>

        <p className="max-w-96 text-base lg:text-lg text-label mt-2 lg:mt-0">
          Páginas rápidas, responsivas e criadas para maximizar conversões.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-4 mt-10">
          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#FF5500"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="max-w-60 w-11/12 lg:w-1/2 size-full object-contain"
        alt="Image High Conversion Page"
        src="/high conversion page.png"
      ></Image>
    </div>
  );
};

const EcommercesContent = () => {
  return (
    <div className="w-11/12 mx-auto lg:w-full bg-degrade-red rounded-[40px] p-6 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between border border-solid border-gray">
      <div className="relative z-50 w-full lg:w-1/2 max-w-max">
        <TextAnimationDegrade
          title={['Lojas virtuais', 'escaláveis']}
          className="items-start"
          classText="text-3xl md:text-5xl lg:text-7xl"
        ></TextAnimationDegrade>

        <p className="max-w-96 text-base lg:text-lg text-label mt-2 lg:mt-0">
          Configure sua loja online em minutos e venda produtos físicos ou
          digitais sem limite.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-4 mt-10">
          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#FF5500"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="w-full lg:w-max shadow-2xl min-w-max py-2"
            background="#1c2225"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>
      </div>

      <Image
        width={450}
        height={450}
        className="max-w-60 w-11/12 lg:w-1/2 size-full object-contain"
        alt="Image Online Stores"
        src="/online stores.png"
      ></Image>
    </div>
  );
};
