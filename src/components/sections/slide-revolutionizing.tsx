'use client';

import { HTMLAttributes, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
// import TextAnimationDegrade from '../../app/_components/title-animation';
import { TextDegrade } from '../text-degrade';
import Image from 'next/image';

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: {
    number: string;
    label: string;
    title: string | React.ReactNode;
    description: string;
    subDescription: string;
    bgColor: string;
  };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: {
    number: string;
    label: string;
    title: string | React.ReactNode;
    description: string;
    subDescription: string;
    bgColor: string;
  }[];
  autoPlay?: boolean;
  className?: string;
}

export function SlideRevolutionizing({
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const list = [
    {
      number: '01',
      label: 'Por que a Goatcom?',
      title: (
        <>
          <TextDegrade
            text="Sonhe grande. Inove rápido. Chegue longe com a Goatcom"
            className="from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
            size="small"
          ></TextDegrade>
        </>
      ),
      description:
        'A Goatcom não apenas acompanha as tendências do e-commerce, ela as redefine, impulsionando inovação, tecnologia e resultados reais para transformar o mercado.',
      subDescription:
        'Criamos soluções que não apenas seguem tendências, mas definem o futuro do e-commerce.',
      bgColor: 'bg-[#2c2c2c]',
    },
    {
      number: '02',
      label: 'Inovação',
      title: (
        <>
          <TextDegrade
            text="Inovação que transforma o E-commerce"
            className="lg:max-w-[570px] from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
            size="small"
          ></TextDegrade>
        </>
      ),
      description:
        'Na Goatcom, inovação não é apenas um conceito, é a nossa essência. Criamos soluções que antecipam o futuro do e-commerce, transformando desafios em oportunidades e tecnologia em resultados reais. ',
      subDescription:
        'Não seguimos padrões, os reinventamos para levar o seu negócio sempre à frente.',
      bgColor: 'bg-[#2c2c2c]',
    },
    {
      number: '03',
      label: 'Simplicidade',
      title: (
        <>
          <TextDegrade
            text="Simplicidade que impulsiona os seus resultados"
            className="lg:max-w-[650px] from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
            size="small"
          ></TextDegrade>
        </>
      ),
      description:
        'Na Goatcom, acreditamos que a inovação deve ser simples. Nossa plataforma foi criada para facilitar sua vida, sem complicação, sem curva de aprendizado. Com uma interface intuitiva e recursos poderosos, você tem tudo o que precisa ao alcance de poucos cliques. Tecnologia avançada, sem complexidade – porque resultados vêm quando a experiência é fácil.',

      subDescription:
        'Tecnologia avançada, sem complexidade – porque resultados vêm quando a experiência é fácil.',
      bgColor: 'bg-gray',
    },
    {
      number: '04',
      label: 'Compromisso',
      title: (
        <>
          <TextDegrade
            text="Compromisso direto com o seu sucesso"
            className="lg:max-w-[650px] from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
            size="small"
          ></TextDegrade>
        </>
      ),
      description:
        'Na Goatcom, nosso compromisso vai além da tecnologia. Estamos aqui para garantir que cada solução entregue gere impacto real no seu negócio. Do suporte à inovação contínua, trabalhamos lado a lado com você para alcançar resultados de verdade.',
      subDescription:
        'Porque crescer juntos não é só uma meta, é a nossa missão.',
      bgColor: 'bg-[#626262]',
    },
  ];

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className="contanierPage mt-10">
      <div className="w-full flex justify-between items-center gap-4">
        <h2 className="font-hankenGrotesk font-light text-white w-full text-start text-3xl lg:text-5xl">
          Revolucionando o jeito de vender online
        </h2>

        <Image
          src={'/arrow-up-right.png'}
          width={83}
          height={82}
          alt="Arrow down"
          className="hidden lg:flex"
        ></Image>
      </div>

      <div className="w-full h-px bg-[#393939] mt-10 mb-12"></div>

      <div
        className={cn(
          'relative flex flex-col gap-4 lg:gap-0 lg:flex-row w-full',
          className,
        )}
      >
        {list.map((item, index) => (
          <>
            <CardItem
              className="flex lg:hidden"
              key={index}
              item={item}
              index={index}
              activeItem={activeItem}
              onClick={() => {
                setActiveItem(index);
                setIsHovering(true);
              }}
            />

            <List
              className="hidden lg:flex"
              key={index}
              item={item}
              index={index}
              activeItem={activeItem}
              onClick={() => {
                setActiveItem(index);
                setIsHovering(true);
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        'relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out',
        {
          'bg-grayDark': index === 0,
          'bg-[#2c2c2c]': index === 1,
          'bg-gray': index === 2,
          'bg-[#626262]': index === 3,
          'flex-grow bg-degrade-gray': index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <div className={cn('h-full w-full object-cover')}>
        <div
          className={cn(
            'size-full rounded-lg p-6 flex items-start justify-start gap-10 overflow-hidden',
            {
              'border border-solid border-gray': index === activeItem,
            },
          )}
        >
          <div className="relative h-[60vh] max-h-[700px] flex flex-col justify-between items-center">
            <p
              className={cn(
                'text-white !font-extralight text-3xl !font-inter',
                {
                  'text-main': index === activeItem,
                },
              )}
            >
              {item.number}
            </p>
            <div className="flex-1 size-4 flex items-end justify-center">
              <p
                className={cn(
                  'min-w-60 text-white -rotate-90 origin-center mb-32 text-xl',
                  {
                    'text-main': index === activeItem,
                  },
                )}
              >
                {item.label}
              </p>
            </div>
          </div>

          {index === activeItem && (
            <div
              className={cn(
                'w-60px overflow-hidden max-w-4xl mt-14 mx-5 flex flex-col',
                {
                  'w-max overflow-visible': index === activeItem,
                },
              )}
            >
              {item.title}
              <p className="text-white mt-14 max-h-52 overflow-hidden text-xl">
                {item.description}
              </p>
              <strong className="max-w-md text-white mt-3 mb-5 max-h-52 overflow-hidden">
                {item.subDescription}
              </strong>

              <a
                href=""
                className="underline text-main flex items-center gap-1 font-semibold"
              >
                Saiba mais
                <Icon
                  name="arrow_right"
                  className="size-4 ml-1 transition-transform text-main duration-300 ease-in-out group-hover:translate-x-0.5"
                ></Icon>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CardItem = ({ item, className, index, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        'sticky top-2 flex lg:min-h-dvh  h-full w-full mx-auto cursor-pointer rounded-md',
        {
          'bg-grayDark': index === 0,
          'bg-[#2c2c2c]': index === 1,
          'bg-gray': index === 2,
          'bg-[#626262]': index === 3,
        },
        className,
      )}
      {...props}
    >
      <div className="h-full w-full object-cover">
        <div className="size-full rounded-lg p-3 flex items-start justify-start gap-4 overflow-hidden">
          <div className="relative min-h-96 lg:min-h-[60vh] flex flex-col justify-between items-center">
            <p
              className={cn('text-main !font-extralight text-2xl !font-inter')}
            >
              {item.number}
            </p>
            <div className="flex-1 size-4 flex items-end justify-center">
              <p
                className={cn(
                  'min-w-60 text-main -rotate-90 origin-center mb-32 text-lg',
                )}
              >
                {item.label}
              </p>
            </div>
          </div>

          <div className="w-max flex flex-col">
            {item.title}
            <p className="text-white mt-4 text-sm lg:text-2xl">
              {item.description}
            </p>
            <strong className="max-w-md text-white mt-3 mb-5 text-sm lg:text-2xl">
              {item.subDescription}
            </strong>

            <a
              href=""
              className="underline text-main flex items-center gap-1 font-semibold"
            >
              Saiba mais
              <Icon
                name="arrow_right"
                className="size-4 ml-1 transition-transform text-main duration-300 ease-in-out group-hover:translate-x-0.5"
              ></Icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
