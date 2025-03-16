'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import Header from './header';

const VideoScrool = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden mb-16">
        <ContainerScroll
          titleComponent={
            <>
              <Header></Header>
            </>
          }
          className="!p-0"
        >
          <Image
            src={`/a73face01a4d63fc1f894eb3808172ef.png`}
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
};

export default VideoScrool;
