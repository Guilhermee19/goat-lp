'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function AppsAndIntegrationsHero() {
  const GRID = [
    {
      title: 'Automação e crescimento sem limites',
      description:
        'Conecte-se a CRMs, ERPs e sistemas de gestão, automatize processos e muito mais.',
      url: '/automacao-conecte.png',
    },
    {
      title: 'Integração com meios de pagamento',
      description:
        'Pagamentos via Pix, boleto, cartão, boleto com processamento seguro.',
      url: '/integracao-pagamento.png',
    },
    {
      title: 'Ferramentas essenciais para tráfego e marketing',
      description: 'Ferramentas essenciais para tráfego e marketing',
      url: '/trafego-marketing.png',
    },
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
      <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
        <div className="rounded-full border max-w-max border-[rgba(255,119,0,0.1)] bg-[#1D110E]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#FF7700] to-[#FF7700] opacity-60 text-transparent bg-clip-text">
            Integrações
          </p>
        </div>

        <TextAnimationDegrade
          title={['Conecte seu negócio às melhores', 'ferramentas do mercado']}
          className="hidden lg:flex justify-start items-start"
          classText="!text-3xl md:!text-5xl lg:!text-7xl"
        ></TextAnimationDegrade>
        <TextAnimationDegrade
          title={['Ferramentas', 'inteligentes para', 'vender mais']}
          className="flex lg:hidden justify-start items-start"
          classText="!text-4xl lg:!text-5xl"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className=" text-white text-left text-lg font-sourceSans3 font-normal"
        >
          Expanda suas vendas e automatize processos com integrações poderosas
          que potencializam sua operação.
        </TextAnimate>

        <ShimmerButton
          className="w-full lg:w-max shadow-2xl min-w-max py-2"
          background="#FF5500"
        >
          <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
            Crie sua conta
            <Icon name="arrow_right" className="size-4"></Icon>
          </span>
        </ShimmerButton>

        <div className="w-full grid lg:grid-cols-3 gap-4 mt-10">
          {GRID.map((el, idx) => (
            <div
              key={idx}
              className="w-full h-max bg-[#1d1d1d] border border-solid border-[#393939] p-4 rounded-xl"
            >
              <p className="text-white text-2xl lg:text-3xl font-hankenGrotesk">
                {el.title}
              </p>
              <p className="min-h-24 text-label text-base lg:text-xl font-sourceSans3">
                {el.description}
              </p>

              <Image
                src={el.url}
                width={413}
                height={370}
                alt="screen landing page"
                className="size-full mt-4 aspect-video object-bottom object-contain"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
