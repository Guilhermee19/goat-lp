'use client';

import Icon from '@/shared/icon/icon';

export function ExploreTheItems({
  info,
}: {
  info: {
    title: string;
    content: string | React.ReactNode;
  }[];
}) {
  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 overflow-hidden my-10 lg:my-20">
      <div className="z-10 flex flex-col gap-4 items-center justify-center">
        <div className="w-full">
          <p className="text-white text-4xl lg:text-6xl text-left !font-light font-hankenGrotesk mb-6">
            <span className="whitespace-pre-wrap tracking-tighter bg-gradient-to-br from-[#FF7F00] from-40% to-[#508FF4] to-80% text-transparent bg-clip-text">
              Explore os itens{' '}
            </span>
            que ajudam a aumentar seu ticket médio
          </p>

          <div className="w-full flex flex-col mt-10">
            {info.map((el, idx) => (
              <div
                key={idx}
                className="w-full flex justify-end items-center gap-4 border-b border-[#7D7D7D66] p-4 hover:bg-main hover:!text-white"
              >
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
