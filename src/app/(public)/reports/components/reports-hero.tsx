'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextDegrade } from '@/components/text-degrade';
import Icon from '@/shared/icon/icon';

export function ReportsHero() {
  return (
    <div className="w-full pt-[120px] pb-14">
      <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-8">
        <div className="rounded-full border max-w-max border-[#393939] bg-[#252525]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#FFFFFF] to-[#999999] opacity-60 text-transparent bg-clip-text">
            Relatórios
          </p>
        </div>

        <TextDegrade
          text="Dados que geram decisões estratégicas"
          className="lg:max-w-[1200px] from-[#ffffff] from-20% via-[#FF7F00] via-60% to-[#508FF4] to-100%"
          position="left"
          size="small"
        ></TextDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className=" max-w-4xl text-white text-left text-lg font-sourceSans3 font-normal"
        >
          Quem tem controle dos números, domina o mercado. A GOATCOM oferece
          relatórios detalhados e insights poderosos para você vender mais com
          estratégia.
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
      </div>
    </div>
  );
}
