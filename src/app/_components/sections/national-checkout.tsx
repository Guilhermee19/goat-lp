'use client';

import { AuroraText } from '@/components/magicui/aurora-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TextAnimationDegrade from '../title-animation';

const fadeInScaleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // ⏳ Tempo de espera entre os itens
      delayChildren: 0.2, // ⏳ Delay inicial antes do primeiro item aparecer
    },
  },
};

const fadeInScaleItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const WobbleCardDemo = ({
  title_1,
  title_2,
  image,
  image_bg,
  description,
  tag,
  classNameCard,
  classNameFlex,
  classNameImage,
  classNameImageBg,
  classNameText,
  position,
}: {
  title_1?: string;
  title_2?: string;
  image?: string;
  image_bg?: string;
  description?: string;
  tag?: string;
  classNameCard?: string;
  classNameFlex?: string;
  classNameImage?: string;
  classNameImageBg?: string;
  classNameText?: string;
  position?: 'top' | 'bottom' | 'right';
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden aspect-square lg:aspect-auto h-full min-h-[200px] lg:min-h-[300px] transition-all bg-degrade-green-dark flex justify-center items-center !rounded-3xl border border-solid border-gray',
        classNameCard,
      )}
    >
      <div
        className={cn(
          'w-full lg:max-w-xs flex flex-col justify-center items-center',
          classNameFlex,
          {
            'flex-col-reverse': position === 'bottom',
            'flex-col-reverse lg:flex-row justify-between lg:items-end':
              position === 'right',
          },
        )}
      >
        {image_bg && (
          <Image
            src={image_bg}
            className={cn(
              'absolute top-0 right-0 size-9/12 min-h-[250px] lg:min-h-[100px] aspect-square object-cover object-left-top',
              classNameImageBg,
            )}
            width={150}
            height={150}
            alt=""
          />
        )}

        <div
          className={cn(
            'font-bold tracking-tighter flex flex-col items-center justify-center',
            { 'items-start gap-4': tag },
            {
              '!items-start lg:!items-center': description,
            },
          )}
        >
          {tag && (
            <div className="rounded-full border max-w-max border-[#013820] bg-[#0A201D]">
              <p className="max-w-max text-xs py-1 px-4 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
                {tag}
              </p>
            </div>
          )}

          {/* {title_1 && (
            <TextAnimationDegrade
              title={[title_1]}
              classText="text-3xl"
            ></TextAnimationDegrade>
          )}
          {title_2 && (
            <TextAnimationDegrade
              title={[title_2]}
              classText="text-3xl"
            ></TextAnimationDegrade>
          )} */}

          {title_1 && (
            <AuroraText
              className={cn('font-light font-hankenGrotesk text-3xl', {
                'mb-8 lg:mb-0': tag,
              })}
            >
              {title_1}
            </AuroraText>
          )}
          {title_2 && (
            <AuroraText className="font-light font-hankenGrotesk text-3xl -mt-3">
              {title_2}
            </AuroraText>
          )}

          {description && (
            <p
              className={cn(
                'text-white text-sm mt-4 !font-light',
                classNameText,
              )}
            >
              {description}
            </p>
          )}
        </div>

        {image && (
          <Image
            src={image}
            className={cn(
              'w-10/12 h-2/4 object-cover aspect-video',
              classNameImage,
            )}
            width={150}
            height={150}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export function NationalCheckout() {
  const arrayCard: {
    title_1?: string;
    title_2?: string;
    image?: string;
    image_bg?: string;
    description?: string;
    tag?: string;
    classNameCard?: string;
    classNameFlex?: string;
    classNameImage?: string;
    classNameImageBg?: string;
    classNameText?: string;
    position?: 'top' | 'bottom' | 'right';
  }[] = [
    {
      title_1: 'Recuperação',
      title_2: 'de venda',
      image: '/chat.png',
      position: 'bottom',
      classNameFlex: 'gap-4',
    },
    {
      title_1: 'Segurança',
      title_2: 'de ponta',
      image: '/block.png',
      position: 'top',
      classNameFlex: 'gap-4',
    },
    {
      title_1: 'Pagamentos',
      title_2: 'instantâneos',
      position: 'right',
      image: '/foguete.png',
      image_bg: '/background-card.png',
      classNameCard: 'lg:!col-span-2 !aspect-auto',
      classNameFlex: '!max-w-full w-10/12',
      classNameImage: 'lg:w-5/12 mx-auto lg:mx-0 !aspect-square',
      classNameImageBg: 'opacity-10',
      classNameText: 'mb-4 lg:mb-0 lg:absolute max-w-60 bottom-8 right-4',
      description:
        'Aceite Pix, boleto, cartão de crédito e mais, sem burocracia.',
    },
    {
      title_1: 'Processamento',
      title_2: 'Ultra Rápido',
      image: '/time.png',
      position: 'top',
      classNameFlex: 'gap-4',
    },
    {
      title_1: 'Integrações',
      position: 'right',
      image: '/58befad4a8235fe3fd1864ac8f171ba2.png',
      image_bg: '/background-card-2.png',
      classNameCard: 'lg:col-span-2 !aspect-auto',
      classNameFlex: '!max-w-full w-11/12 lg:w-10/12',
      classNameImage: 'lg:w-5/12 mx-auto lg:mx-0 !aspect-square',
      classNameImageBg: 'opacity-10',
      tag: 'Integramos com os melhores meios de pagamentos',
    },
    {
      title_1: 'Venda no',
      title_2: 'mundo todo',
      image: '/local.png',
      image_bg: '/background-card-3.png',
      position: 'bottom',
      classNameFlex: 'gap-4 !max-w-full',
      classNameImageBg:
        '!size-full !object-contain !object-left-top opacity-20 ',
      description: 'Seja global com a Goatcom!',
    },
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg p-5 mt-20">
      <div className="z-10 lg:min-h-[600px] flex flex-col gap-4 items-center justify-center">
        <div className="rounded-full border max-w-max border-[#013820] bg-[#0A201D]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
            Checkout Nacional
          </p>
        </div>

        <TextAnimationDegrade
          title={['Converta sem limites', 'no Brasil']}
          className="mt-10 hidden lg:flex"
        ></TextAnimationDegrade>

        <TextAnimationDegrade
          title={['Converta sem', 'limites no Brasil']}
          className="mt-10 flex lg:hidden"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="max-w-2xl w-11/12 text-white text-center mt-4 lg:mt-8 text-lg lg:text-xl font-sourceSans3 font-normal"
        >
          Venda mais, sem barreiras. Nosso checkout foi projetado para eliminar
          fricções e garantir conversões absurdas.
        </TextAnimate>

        <div className="w-full lg:w-max flex items-center flex-col lg:flex-row gap-4 mt-10">
          <ShimmerButton
            className="shadow-2xl min-w-max py-2 w-full lg:w-max"
            background="#FF5500"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>

          <ShimmerButton
            className="shadow-2xl min-w-max py-2 w-full lg:w-max"
            background="#191919"
          >
            <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Veja como funciona
            </span>
          </ShimmerButton>
        </div>

        <motion.div
          variants={fadeInScaleContainer} // Animação do container (stagger)
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Permite reativação ao rolar e define quão visível precisa estar
          className="w-full h-full flex flex-col lg:grid lg:grid-cols-4 gap-4 mt-7 lg:mt-14"
        >
          {arrayCard.map((el, index) => (
            <motion.div
              key={index}
              variants={fadeInScaleItem}
              className={el.classNameCard}
            >
              <WobbleCardDemo {...el} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
