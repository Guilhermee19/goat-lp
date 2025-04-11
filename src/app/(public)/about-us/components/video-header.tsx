'use client';

import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import Image from 'next/image';

export function VideoHeader() {
  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 overflow-hidden my-10 lg:my-20">
        <div className="z-10 flex flex-col gap-4 items-center justify-center">
          <p className="max-w-2xl text-white text-4xl lg:text-8xl text-center !font-light font-hankenGrotesk leading-none">
            Revolucionando o jeito de{' '}
            <span className="whitespace-pre-wrap tracking-tighter bg-gradient-to-br from-[#FF7F00] from-40% to-[#508FF4] to-80% text-transparent bg-clip-text">
              vender online
            </span>
          </p>

          <div className="relative w-full lg:max-w-5xl flex flex-col gap-4 mt-16">
            <Image
              src={'/block.png'}
              width={210}
              height={180}
              alt="block"
              className="absolute -top-24 -right-20 z-30"
            ></Image>

            <div className="relative rounded-3xl gradient-border p-1 overflow-hidden bg-gradient-to-b from-[#00000000] from-30% to-[#000000] to-100%">
              <HeroVideoDialog
                className="block dark:hidden rounded-3xl z-20"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block rounded-3xl z-20"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
              <div className="absolute top-0 left-0 size-full gradient-border"></div>
              <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-[#00000000] from-3% to-[#000000] to-100%"></div>
            </div>

            <p className="w-full text-[#F3F3F3] text-base lg:text-xl text-left !font-light font-sourceSans3">
              A Goatcom nasceu com um propósito claro: transformar a forma como
              negócios crescem e vendem no digital. Criamos a plataforma
              definitiva para quem quer escalar vendas, aumentar conversões e
              oferecer a melhor experiência de compra para seus clientes.
            </p>

            <p className="w-full text-[#F3F3F3] text-base lg:text-xl text-left !font-light font-sourceSans3 mt-4">
              Sabemos que vender online não pode ser complicado. Por isso,
              desenvolvemos uma estrutura robusta, intuitiva e otimizada para
              quem quer resultados de verdade. Seja um infoproduto, um
              e-commerce de alto volume ou um lançamento de peso, a GOATCOM
              entrega tecnologia de ponta com simplicidade e performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
