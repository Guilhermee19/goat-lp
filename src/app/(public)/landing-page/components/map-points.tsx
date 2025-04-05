'use client';

import Image from 'next/image';

export function MapPoints({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
      <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
        {title && description && (
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="max-w-xl text-white font-hankenGrotesk text-3xl lg:text-5xl font-light">
              {title}
            </p>
            <p className="max-w-lg text-label font-sourceSans3 text-base lg:text-xl font-light my-6">
              {description}
            </p>
          </div>
        )}

        <div className="w-full">
          <Image
            width={1240}
            height={540}
            alt="map"
            src={'/points-map.png'}
            className="hidden lg:flex"
          ></Image>

          <Image
            width={360}
            height={500}
            alt="map"
            src={'/points-map-mobile.png'}
            className="flex lg:hidden mx-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
}
