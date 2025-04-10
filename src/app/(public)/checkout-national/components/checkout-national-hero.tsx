'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextDegrade } from '@/components/text-degrade';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function CheckoutNationalHero() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center my-20">
        <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
          <div className="rounded-full border max-w-max border-[rgba(0,255,195,0.3)] bg-[#0A201D]">
            <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
              Checkot Nacional
            </p>
          </div>
          ,
          <TextDegrade
            text="Venda sem limites no Brasil com um checkout otimizado para conversão"
            className="lg:max-w-5xl from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="center"
            size="large"
          ></TextDegrade>
          <div className="w-full max-w-3xl">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-white text-center mt-2 text-base lg:text-xl font-sourceSans3 font-light"
            >
              O Checkout da Goatcom elimina fricções, acelera pagamentos e
              transforma visitantes em clientes. Venda mais todos os dias!
            </TextAnimate>
          </div>
          <div className="mt-6 mx-auto flex justify-center items-center">
            <ShimmerButton
              className="w-max shadow-2xl min-w-max py-2"
              background="#FF5500"
            >
              <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
                Crie sua conta
                <Icon name="arrow_right" className="size-4"></Icon>
              </span>
            </ShimmerButton>
          </div>
        </div>

        <Image
          src={'video-checout-nacional.png'}
          width={1240}
          height={790}
          alt="screen landing page"
          className="sticky top-0 mt-20 size-full"
        ></Image>
      </div>
    </>
  );
}
