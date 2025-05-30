'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextDegrade } from '@/components/text-degrade';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function AnimationStickyMarketing() {
  const GRID = [
    {
      title: 'Goatcheckout',
      description: 'Sem passos complicados e sem redirecionamentos.',
      url: '/credit card.png',
      backgroundColor: 'bg-gradient-to-b from-[#0A201D] to-[#0A201D4D]',
      classImage: '',
    },
    {
      title: 'Loja Online',
      description: 'Venda qualquer produto para qualquer lugar.',
      url: '/buy-custom-product.png',
      backgroundColor: 'bg-gradient-to-b from-[#220C20] to-[#220C204D]',
      classImage: '',
    },
    {
      title: 'Landing Pages',
      description: 'AntAltíssima conversão para você vender masi.',
      url: '/custom-landing-page.png',
      backgroundColor: 'bg-gradient-to-b from-[#130C22] to-[#130C224D]',
      classImage: 'p-5',
    },
  ];
  return (
    <div className="relative w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20">
      <div className="relative w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-6">
        <div className="w-full lg:w-8/12 h-max lg:sticky lg:top-4" id="sticky">
          <TextDegrade
            text="Utilize todo o ecossistema de produtos da Goatcom!"
            className="from-[#ffffff] from-30% via-[#FF7F00] via-70% to-[#508FF4] to-100%"
            position="left"
            size="small"
          ></TextDegrade>

          <Image
            src={'/user-cafeteria.png'}
            width={740}
            height={510}
            alt="user cafeteria"
            className="mt-6"
          ></Image>
        </div>

        <div className="w-full lg:w-[440px] col-span-3 mt-8 lg:mt-0">
          {GRID.map((el, idx) => (
            <div key={idx} className={cn('', { 'mt-18': idx > 0 })}>
              <div className="flex items-center justify-start gap-3">
                <Icon
                  name="circle_chevron_right"
                  className="min-size-5 size-5 text-base text-main"
                ></Icon>
                <p className="w-10/12 text-white text-xl lg:text-3xl font-hankenGrotesk font-light">
                  {el.title}
                </p>
              </div>
              <p className="text-label text-lg lg:text-xl font-sourceSans3 font-light mt-3">
                {el.description}{' '}
              </p>

              <div
                className={cn(
                  'w-full aspect-square flex justify-center items-center mt-6',
                  el.backgroundColor,
                )}
              >
                <Image
                  src={el.url}
                  width={440}
                  height={530}
                  alt=""
                  className={cn('w-full', el.classImage)}
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
