'use client';

import { InfiniteMovingPages } from './infinite-moving-pages';

export function ThemeCollection() {
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
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="max-w-xl text-white font-hankenGrotesk text-3xl lg:text-5xl font-light">
              Os temas são feitos para o comércio
            </p>
            <p className="text-label font-sourceSans3 text-base lg:text-xl font-light my-6">
              Cada tema apresenta recursos de venda e conversão diretamente
              integrados. Escolha um que seja a cara da sua marca e
              personalize-o do seu jeito.
            </p>
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
