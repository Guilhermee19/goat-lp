'use client';

import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Icon from '@/shared/icon/icon';

export function StayInTouch() {
  const SOCIAL = [
    { url: 'facebook.png', link: 'Facebook' },
    { url: 'instagram.png', link: 'Instagram' },
    { url: 'x_twitter.png', link: 'X' },
    { url: 'linkdin.png', link: 'LinkedIn' },
    { url: 'youtube.png', link: 'YouTube' },
    { url: 'tiktok.png', link: 'TikTok' },
  ];
  return (
    <div
      className="w-full 
      py-10 px-4 mt-20
      bg-gradient-to-r 
      from-[#000000] from-0% 
      via-[#181818] via-50% 
      to-[#000000] to-100%  
      "
    >
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="w-full lg:w-max flex flex-col items-start gap-4">
          <p className="text-white text-3xl md:text-4xl font-hankenGrotesk font-light">
            Fique em contato
          </p>

          <p className=" text-white text-sm lg:text-base font-sourceSans3 font-light">
            Acompanhe a Goatcom nas redes sociais. Contato de imprensa: <br />
            contato@goatcom.io
          </p>

          <div className="flex gap-2">
            {SOCIAL.map((item, index) => (
              <a
                key={index}
                href={`https://www.${item.link}.com/goatcom`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center size-9 lg:size-12 justify-center rounded-full bg-[rgba(255,255,255,0.05)]"
              >
                <img
                  src={`social/${item.url}`}
                  alt={item.link}
                  className="size-full p-3 lg:p-[17px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 mt-4 lg:mt-0">
          <p className="text-white text-2xl md:text-3xl font-hankenGrotesk font-light lg:font-semibold">
            Assine nossa <br className="hidden lg:block" />
            newsletter
          </p>

          <p className=" text-white text-sm lg:text-base font-sourceSans3 font-light mt-2">
            Atualizações do produto e ofertas exclusivas diretamente em sua
            caixa de entrada
          </p>

          <div className="w-full flex items-center flex-col lg:flex-row gap-6 mt-4">
            <input
              type="text"
              placeholder="Insira seu e-mail"
              className="w-full h-14 px-8 rounded-full bg-transparent border border-[#525252] text-white placeholder:text-[#e5e5e59c] focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
            />

            <ShimmerButton
              className="shadow-2xl min-w-max py-3 w-full lg:w-max"
              background="#fff"
            >
              <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-black font-hankenGrotesk lg:text-lg">
                Assine a newsletter
                <Icon name="arrow_right" className="size-4"></Icon>
              </span>
            </ShimmerButton>
          </div>

          <p className=" text-[#A3A3A3] text-xs font-hankenGrotesk font-light mt-2">
            Seu endereço de email só será usado para enviar-lhe a newsletter,
            assim como novidades e ofertas. Você pode desinscrever- se a
            qualquer momento usando o link incluído na newsletter.
          </p>

          <p className=" text-[#A3A3A3] text-sm font-hankenGrotesk font-light underline mt-2">
            Saiba mais sobre como gerenciamos seus dados e seus direitos.
          </p>
        </div>
      </div>
    </div>
  );
}
