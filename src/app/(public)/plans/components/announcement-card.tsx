'use client';

import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function AnnouncementCard({
  title,
  description,
  classBorder,
  classTitle,
  className,
}: {
  title: string;
  description: string;
  classBorder?: string;
  classTitle?: string;
  className: string;
}) {
  return (
    <div
      className={cn(
        'w-11/12 max-w-7xl mx-auto my-10 lg:my-20',
        'border-transparent border-1', // Borda transparente para usar o gradiente da borda
        classBorder,
      )}
    >
      <div
        className={cn(
          'size-full flex flex-col lg:flex-row justify-betwee items-center py-10 px-8 border border-solid',
          className,
        )}
      >
        <div className="w-full">
          <p
            className={cn(
              'lg:max-w-[600px] text-white text-2xl lg:text-3xl md:text-4xl font-hankenGrotesk font-light',
              classTitle,
            )}
          >
            {title}
          </p>

          <p className="lg:max-w-md text-label text-sm lg:text-base font-sourceSans3 font-light mt-4">
            {description}
          </p>
        </div>

        <div className="w-full lg:w-96 mt-4 lg:mt-0">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="w-max flex justify-center items-center">
              <Image
                src="https://avatars.githubusercontent.com/u/16860528"
                alt="brazil"
                width={40}
                height={40}
                className="min-w-9 h-9 rounded-full border-2 border-solid border-[#0a201d] overflow-hidden"
              />
              <Image
                src="https://avatars.githubusercontent.com/u/16860528"
                alt="brazil"
                width={40}
                height={40}
                className="min-w-9 h-9 rounded-full border-2 border-solid border-[#0a201d] overflow-hidden -m-1"
              />
              <Image
                src="https://avatars.githubusercontent.com/u/16860528"
                alt="brazil"
                width={40}
                height={40}
                className="min-w-9 h-9 rounded-full border-2 border-solid border-[#0a201d] overflow-hidden -m-1"
              />
            </div>

            <div className="w-full flex justify-center items-center gap-4">
              <div className="flex flex-col justify-start items-start">
                <p className="text-3xl text-white font-light font-hankenGrotesk">
                  2.000+
                </p>
                <p className="text-xs text-label"> clientes </p>
              </div>

              <div className="w-px h-6 bg-[#666666]"></div>

              <div className="flex flex-col justify-start items-start">
                <p className="text-3xl text-white font-light font-hankenGrotesk">
                  15%+
                </p>
                <p className="text-xs text-label"> conversões </p>
              </div>
            </div>
          </div>

          <ShimmerButton
            className="w-full shadow-2xl min-w-max py-2 mt-2 flex justify-center items-center"
            background="#FF5500"
          >
            <span className="w-max whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Criar sua conta
              <Icon name="arrow_right" className="size-4"></Icon>
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
