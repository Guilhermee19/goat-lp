'use client';

import Image from 'next/image';

const VideoScroll = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden mb-16">
        {/* <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        > */}
        <Image
          src={`/a73face01a4d63fc1f894eb3808172ef.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-10/12"
          draggable={false}
        />
        {/* </ContainerScroll> */}
      </div>
    </>
  );
};

export default VideoScroll;
