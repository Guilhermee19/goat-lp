'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function PersonalisedThemes() {
  const PRODUCTS = [
    {
      title: 'Decor',
      subtitle:
        'é nosso tema padrão. Tem um layout limpo e pode se adaptar muito bem às necessidades de qualquer negócio.',
      link: '/',
      thumbnail: 'themes/decoration-themes.png',
    },
    {
      title: 'Cosmetics',
      subtitle:
        'Com layout divertido e colorido e a logo centralizada no cabeçalho, dá ainda mais destaque para a sua marca.',
      link: '/',
      thumbnail: 'themes/cosmetics-topics.png',
    },
    {
      title: 'Kids',
      subtitle:
        'Design moderno e cores marcantes, tem uma página inicial que foca nas coleções de produtos. Ideal para lojas .',
      link: '/',
      thumbnail: 'themes/kids-themes.png',
    },
    {
      title: 'Fashion',
      subtitle:
        'Layout com um design minimalista e cores sóbrias, traz sofisticação e delicadeza para sua loja.',
      link: '/',
      thumbnail: 'themes/store-themes.png',
    },
    {
      title: 'Tech',
      subtitle:
        'Layout moderno chama atenção pelas cores vibrantes. Traz tipografia e bordas mais arredondadas e delicadas.',
      link: '/',
      thumbnail: 'themes/electronics-topics.png',
    },
    {
      title:
        'Escolha um tema que seja a cara da sua marca e personalize-o do seu jeito.',
      subtitle: '',
      link: '',
      thumbnail: '',
    },
  ];

  return (
    <div className="w-full rounded-t-3xl mt-20 bg-[#1D1D1D]">
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg px-2 py-5 pb-10 lg:px-5 lg:py-10 lg:pb-20 overflow-hidden">
        <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
          <TextAnimationDegrade
            title={[
              'Venda qualquer coisa online com',
              'nossos temas personalizáveis',
            ]}
            className="hidden lg:flex justify-start items-start"
            classText="!text-3xl md:!text-5xl lg:!text-7xl"
          ></TextAnimationDegrade>
          <TextAnimationDegrade
            title={[
              'Venda qualquer coisa',
              'online com nossos temas',
              'personalizáveis',
            ]}
            className="flex lg:hidden justify-start items-start"
            classText="!text-2xl md:!text-4xl !m-0"
          ></TextAnimationDegrade>

          <div className="w-full grid lg:grid-cols-2 gap-y-20 gap-x-12 mt-6">
            {PRODUCTS.map((el, idx) => (
              <div key={idx} className="w-full">
                <div className="w-full">
                  <p
                    className={cn(
                      'max-w-xl text-white font-hankenGrotesk flex justify-start items-start text-2xl lg:text-5xl font-light',
                      { 'text-2xl lg:text-4xl': !el.thumbnail },
                    )}
                  >
                    {el.title}
                    {el.link && (
                      <Icon
                        name="arrow_up_right"
                        className="size-6 text-white text-base font-light lg:mt-1 ml-2 cursor-pointer"
                      ></Icon>
                    )}
                  </p>
                  {el.subtitle && (
                    <p className="text-label font-sourceSans3 text-base lg:text-xl font-light my-4 lg:my-6">
                      {el.subtitle}
                    </p>
                  )}
                </div>

                {el.thumbnail && (
                  <Image
                    src={el.thumbnail}
                    width={590}
                    height={600}
                    alt={el.title}
                    className="w-full object-contain mt-5 lg:mt-10 rounded-3xl overflow-hidden"
                  ></Image>
                )}

                {!el.thumbnail && (
                  <Image
                    src={'/personalize-do-seu-jeito.png'}
                    width={590}
                    height={600}
                    alt={el.title}
                    className="w-full object-contain mt-10"
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
