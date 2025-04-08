'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextDegrade } from '@/components/text-degrade';
import Icon from '@/shared/icon/icon';

export function MarketingHero() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
      <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
        <div className="rounded-full border max-w-max border-[#393939] bg-[#252525]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#FFFFFF] to-[#999999] opacity-60 text-transparent bg-clip-text">
            Marketing
          </p>
        </div>

        <TextDegrade
          text="Ferramentas inteligentes para vender mais"
          className="from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
          position="left"
        ></TextDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className=" text-white text-left text-lg font-sourceSans3 font-normal"
        >
          Vendas não acontecem por acaso. Na GOATCOM, você tem tudo que precisa
          para atrair, engajar e converter mais clientes com estratégias
          automatizadas e eficientes.
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
