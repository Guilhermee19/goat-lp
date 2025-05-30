'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import Header from './header';

export function VideoScrool() {
  return (
    <>
      <div className="flex flex-col overflow-hidden mb-6 lg:mb-16">
        <ContainerScroll
          titleComponent={
            <>
              <Header></Header>
            </>
          }
          className="!p-0 h-max lg:h-[60rem]"
        >
          <Image
            src={`/dashboard.png`}
            alt="hero"
            height={1920}
            width={1080}
            className="mx-auto rounded-2xl object-cover object-left-top size-full !p-0"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
}
