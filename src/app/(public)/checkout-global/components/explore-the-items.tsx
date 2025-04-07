'use client';

import Icon from '@/shared/icon/icon';

export function ExploreTheItems({
  title,
  info,
}: {
  title: string | React.ReactNode;
  info: {
    title: string | React.ReactNode;
    content: string | React.ReactNode;
  }[];
}) {
  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 overflow-hidden my-10 lg:my-20">
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center">
        <div className="w-full">
          {title}

          <div className="w-full flex flex-col mt-10">
            {info.map((el, idx) => (
              <div
                key={idx}
                className="relative w-full flex justify-end items-center gap-4 border-b border-[#7D7D7D66] p-4 hover:bg-main hover:!text-white group"
              >
                <div className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {el.content}
                </div>

                <p className="font-sourceSans3 text-4xl text-white font-light">
                  {el.title}{' '}
                </p>

                <Icon name="circle_info" className="size-7 text-label"></Icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
