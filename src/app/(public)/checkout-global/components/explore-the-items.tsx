'use client';

import { Tabs } from '@/components/ui/tabs';
import Icon from '@/shared/icon/icon';
import { useState } from 'react';

export function ExploreTheItems({
  title,
  info,
}: {
  title: string | React.ReactNode;
  info: {
    title: string | React.ReactNode;
    value: string;
    content: string | React.ReactNode;
  }[];
}) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 my-10 lg:my-20">
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center">
        <div className="w-full">
          {title}

          <div className="[perspective:1000px] relative b hidden lg:flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-14">
            <Tabs
              tabs={info}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex} // Passa a função setTabIndex para o Tabs
              tabClassName="text-white"
              containerClassName="!w-max !mx-auto !py-2 !px-3 !justify-center !border !border-solid !border-gray !rounded-full"
            />
          </div>

          {/* {info.map((el, idx) => (
            <div key={idx} className="z-20 h-max w-max">
              {el.content}
            </div>
          ))} */}

          <div className="w-full flex-col mt-10 hidden lg:flex">
            {info.map((el, idx) => (
              <div
                key={idx}
                className="relative w-full flex justify-end items-center gap-4 border-b border-[#7D7D7D66] p-4 hover:bg-main hover:!text-white group"
              >
                <div className="z-20 h-px group-hover:h-max w-max absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {el.content}
                </div>

                <p className="relative z-10 font-sourceSans3 text-4xl text-white font-light">
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
