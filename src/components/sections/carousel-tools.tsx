import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
        'relative h-full w-52 lg:w-44 flex justify-center items-center cursor-pointer overflow-hidden',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <Image
        className="object-contain w-32 h-10 lg:h-7 m-auto"
        width="120"
        height="27"
        alt={name}
        src={img}
      />
    </a>
  );
};

export function MarqueeTools() {
  return (
    <>
      <p className="text-base text-[#7D7D7D] w-full text-center my-3 lg:my-6">
        Integrações e ferramentas de empresas líderes em todo o mundo
      </p>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.link} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </>
  );
}
