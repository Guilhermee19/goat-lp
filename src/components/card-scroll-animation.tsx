'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

interface VideoScrollProps {
  imageSrc: string; // Para passar o link da imagem
  children: React.ReactNode; // Para passar o conteúdo como filhos (ex: <ReportsHero />)
}

export function CardScrollAnimation({ imageSrc, children }: VideoScrollProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="contanierPage !p-0 flex flex-col">
        <ContainerScroll
          titleComponent={children} // Aqui usamos o children
          className="w-full max-w-[944px] mx-auto !p-0 h-max transition-all ease-in-out duration-500"
        >
          <Image
            src={imageSrc}
            alt="hero"
            height={994}
            width={531}
            className="mx-auto rounded-2xl object-cover object-left-top size-full !p-0 transition-all ease-in-out duration-500"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
