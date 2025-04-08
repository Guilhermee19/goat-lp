'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import Icon from '@/shared/icon/icon';
import { InfiniteMovingPages } from '../../landing-page/components/infinite-moving-pages';
import { TextDegrade } from '@/components/text-degrade';

export function OnlineShopHero() {
  const PRODUCTS = [
    { title: 'Pet', link: '', thumbnail: 'themes/animal-themes.png' },
    { title: 'Kids co.', link: '', thumbnail: 'themes/kids-themes.png' },
    { title: 'Cosmetics', link: '', thumbnail: 'themes/cosmetics-topics.png' },
    { title: 'Decor', link: '', thumbnail: 'themes/decoration-themes.png' },
    {
      title: 'Eletrolife',
      link: '',
      thumbnail: 'themes/electronics-topics.png',
    },
    { title: 'Receitas', link: '', thumbnail: 'themes/recipe-themes.png' },
    { title: 'FC', link: '', thumbnail: 'themes/store-themes.png' },
    {
      title: 'Remedios naturais',
      link: '',
      thumbnail: 'themes/topics-of-natural-remedies.png',
    },
    { title: 'Pet', link: '', thumbnail: 'themes/animal-themes.png' },
    { title: 'Kids co.', link: '', thumbnail: 'themes/kids-themes.png' },
    { title: 'Cosmetics', link: '', thumbnail: 'themes/cosmetics-topics.png' },
    { title: 'Decor', link: '', thumbnail: 'themes/decoration-themes.png' },
    {
      title: 'Eletrolife',
      link: '',
      thumbnail: 'themes/electronics-topics.png',
    },
    { title: 'Receitas', link: '', thumbnail: 'themes/recipe-themes.png' },
    { title: 'FC', link: '', thumbnail: 'themes/store-themes.png' },
    {
      title: 'Remedios naturais',
      link: '',
      thumbnail: 'themes/topics-of-natural-remedies.png',
    },
  ];

  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
        <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
          <div className="rounded-full border max-w-max border-[#361328] bg-[#1D0E18]">
            <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#F187DC] to-[#C615A3] opacity-60 text-transparent bg-clip-text">
              Loja Virtual
            </p>
          </div>

          <TextDegrade
            text="Venda sem limites com um e-commerce otimizado para faturamento máximo"
            className="lg:max-w-[1100px] from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
          ></TextDegrade>

          <TextAnimate
            animation="slideUp"
            by="word"
            className="max-w-[985px] text-white text-left text-lg font-sourceSans3 font-normal"
          >
            A estrutura do seu e-commerce pode ser o diferencial entre crescer
            ou estagnar. A GOATCOM oferece uma plataforma completa para quem
            quer vender mais, com estabilidade, desempenho e estratégias que
            aumentam o ticket médio.
          </TextAnimate>

          <div className="flex items-center flex-col lg:flex-row gap-4 mt-10">
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
              className="w-full lg:w-max !shadow-none min-w-max py-2"
              background="#1c2225"
              shadow={false}
            >
              <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
                Veja como funciona
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <InfiniteMovingPages
          pages={PRODUCTS}
          direction="left"
          speed="very_slow"
        />
      </div>
    </>
  );
}
