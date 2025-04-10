'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { Marquee } from '@/components/magicui/marquee';
import { TextDegrade } from '@/components/text-degrade';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function ClientCarousel() {
  const reviews = [
    {
      link: 'https://www.bling.com.br/',
      name: 'bling!',
      img: '/logo-tools/bling 1.png',
    },
    {
      link: 'https://www.wiio.io/',
      name: 'wiio',
      img: '/logo-tools/wiio.png',
    },
    {
      link: 'https://reportana.com/',
      name: 'reportana',
      img: '/logo-tools/reportana.png',
    },
    {
      link: 'https://dropi.com.br/',
      name: 'dropi',
      img: '/logo-tools/dropi.png',
    },
    {
      link: 'https://utmify.com.br/',
      name: 'utmify',
      img: '/logo-tools/utmify.png',
    },
    {
      link: 'https://notazz.com/',
      name: 'notazz',
      img: '/logo-tools/notazz.png',
    },
    {
      link: 'https://profitfy.com/',
      name: 'profitfy',
      img: '/logo-tools/profitfy.png',
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center my-20">
      <div className="rounded-full border max-w-max border-[rgba(0,255,195,0.3)] bg-[#0A201D]">
        <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
          Nossos clientes
        </p>
      </div>

      <TextDegrade
        text="Mais de 2.000 empresas estão vendendo sem limites"
        className="lg:max-w-4xl from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
        position="center"
        size="large"
      ></TextDegrade>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10">
        <div className="w-full">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="w-full mt-10">
          <Marquee pauseOnHover reverse={true} className="[--duration:20s]">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}

const ReviewCard = ({
  img,
  name,
  link,
}: {
  img: string;
  name: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        'relative h-full w-44 flex justify-center items-center cursor-pointer overflow-hidden',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <Image
        className="object-contain w-32 h-10 lg:h-7"
        width="120"
        height="27"
        alt={name}
        src={img}
      />
    </a>
  );
};
