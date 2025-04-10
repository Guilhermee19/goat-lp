'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextDegrade } from '@/components/text-degrade';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function LandingPageHero() {
  return (
    <div className="lg:sticky lg:-top-[250px] z-10 w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
      <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
        <div className="rounded-full border max-w-max border-[#250e64] bg-[#170921]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#B69BFA] to-[#6A29EA] opacity-60 text-transparent bg-clip-text">
            Landing Pages
          </p>
        </div>

        <TextDegrade
          text="Crie páginas em tempo recorde e aumente suas conversões com a GOAT."
          className="lg:max-w-[1100px] from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
          position="left"
          size="large"
        ></TextDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className=" text-white text-left text-lg font-sourceSans3 font-normal"
        >
          Máxima conversão, facilitando a criação de páginas de vendas
          poderosas. Comece hoje!
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

        <Image
          src={'landing pagel_editar.png'}
          width={1240}
          height={790}
          alt="screen landing page"
          className="sticky top-0 mt-10 size-full"
        ></Image>
      </div>
    </div>
  );
}
