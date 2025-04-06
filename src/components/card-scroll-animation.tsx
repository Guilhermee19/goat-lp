'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

interface VideoScrollProps {
  imageSrc: string; // Para passar o link da imagem
  children: React.ReactNode; // Para passar o conteúdo como filhos (ex: <ReportsHero />)
}

export function CardScrollAnimation({ imageSrc, children }: VideoScrollProps) {
  return (
    <div className="flex flex-col overflow-hidden mb-6 lg:mb-16 !pt-6 lg:pt-0">
      <ContainerScroll
        titleComponent={children} // Aqui usamos o children
        className="w-11/12 max-w-7xl mx-auto !p-0 h-max lg:h-[60rem] transition-all ease-in-out duration-500"
      >
        <Image
          src={imageSrc}
          alt="hero"
          height={1920}
          width={1080}
          className="mx-auto rounded-2xl object-cover object-left-top size-full !p-0 transition-all ease-in-out duration-500"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
