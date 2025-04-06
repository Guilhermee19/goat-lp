'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Diferenciais() {
  const DIFFERENTIALS = [
    {
      title: 'Crie uma loja tão única quanto sua marca.',
      subtitle: 'Múltiplos menus para você personalizar',
      url: '/mult-menus.png',
      classHeader: '',
      className: '',
    },
    {
      title: 'Customização simples e rápida',
      subtitle:
        'Personalize cada detalhe sem precisar de conhecimento técnico.',
      url: '/custom-details.png',
      classHeader: '',
      className: '',
    },
    {
      title: 'Se você pode imaginar, você pode construir',
      subtitle:
        'Customize o CSS do seu jeito. Funcionalidade avançada para você estilizar usas páginas.',
      url: '/build_screen.png',
      url_mobile: '/build-screen-mobile.png',
      classHeader:
        'flex flex-col lg:flex-rows justify-between items-center lg:gap-8',
      className: 'lg:col-span-2',
    },
    {
      title: 'Máxima conversão e resultados supersônicos',
      subtitle:
        'Ajuste suas estratégias e descubra o que funciona melhor para seu público.',
      url: '/supersonico.png',
      classHeader: '',
      className: '',
    },
    {
      title: 'Carregamento ultrarrápido para vendas diárias',
      subtitle: 'Não perca clientes por páginas lentas.',
      url: '/loading-speed.png',
      classHeader: '',
      className: '',
    },
    {
      title: 'Design responsivo em qualquer dispositivo móvel',
      subtitle:
        'Páginas que oferecem uma experiência impecável em qualquer dispositivo.',
      url: '/dispositivos-mobile.png',
      url_mobile: '/dispositivos-mobile-responsive.png',
      classHeader:
        'flex flex-col lg:flex-rows justify-between items-center lg:gap-8',
      className: 'lg:col-span-2',
    },
  ];

  return (
    <div className="w-full rounded-t-3xl mt-20 bg-gradient-to-b from-[#1D1D1D] to-[#000000]">
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg px-2 py-5 lg:px-5 lg:py-10 overflow-hidden">
        <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
          <TextAnimationDegrade
            title={['O que torna nossas ', 'Landing Pages diferentes']}
            className="hidden lg:flex justify-start items-start"
            classText="!text-3xl md:!text-5xl lg:!text-7xl"
          ></TextAnimationDegrade>
          <TextAnimationDegrade
            title={['O que torna nossas ', 'Landing Pages', 'diferentes']}
            className="flex lg:hidden justify-start items-start"
            classText="!text-3xl md:!text-5xl lg:!text-7xl !m-0"
          ></TextAnimationDegrade>

          <div className="w-full grid lg:grid-cols-2 gap-y-20 gap-x-12 mt-6">
            {DIFFERENTIALS.map((el, idx) => (
              <div key={idx} className={(cn('w-full'), el.className)}>
                <div className={(cn('w-full'), el.classHeader)}>
                  <p className="max-w-xl text-white font-hankenGrotesk text-3xl lg:text-5xl font-light">
                    {el.title}
                  </p>
                  <p className="text-label font-sourceSans3 text-base lg:text-xl font-light my-6">
                    {el.subtitle}
                  </p>
                </div>

                <Image
                  src={el.url}
                  width={590}
                  height={600}
                  alt={el.title}
                  className={cn('w-full object-contain mt-10', {
                    'hidden lg:flex': el.url_mobile,
                  })}
                ></Image>

                {el.url_mobile && (
                  <Image
                    src={el.url_mobile}
                    width={590}
                    height={600}
                    alt={el.title}
                    className="w-full object-contain mt-10 flex lg:hidden"
                  ></Image>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
