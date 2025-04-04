'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextAnimate } from './magicui/text-animate';
import { ShimmerButton } from './magicui/shimmer-button';
import Icon from '@/shared/icon/icon';

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-12 lg:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Gradiente superior */}
      <div className="pointer-events-none absolute inset-y-0 top-0 w-full h-2/6 bg-gradient-to-b from-black to-transparent z-50"></div>

      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10 lg:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-10 lg:mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center rounded-lg p-5 mt-20 relative py-12 lg:py-40 px-4 w-fullleft-0 top-0 z-50">
      <div className="lg:w-max">
        <TextAnimationDegrade
          title={['Temas de alta conversão']}
          className="mt-0 !items-start hidden lg:flex"
          classText="!text-5xl"
        ></TextAnimationDegrade>

        <TextAnimationDegrade
          title={['Temas de alta', 'conversão']}
          className="mt-0 !items-start flex lg:hidden"
          classText="!text-4xl"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="w-full max-w-xl text-white text-base lg:text-xl font-sourceSans3 font-normal"
        >
          Com design inteligente e estratégias de marketing avançadas para
          maximizar seus resultados.
        </TextAnimate>
      </div>

      <div className="w-full lg:w-max flex items-center flex-col lg:flex-row gap-4 mt-6 lg:mt-0">
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
            Explorar temas
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-32 lg:h-96 w-[10rem] lg:w-[30rem] relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
