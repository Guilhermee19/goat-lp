'use client';

import { HeroParallax } from '../hero-parallax';

export function WebsiteThemes() {
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
  ];
  return (
    <>
      <HeroParallax products={PRODUCTS}></HeroParallax>
    </>
  );
}
