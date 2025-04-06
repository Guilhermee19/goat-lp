'use client';

import Android from '@/components/magicui/android';
import { Safari } from '@/components/magicui/safari';
import { Tabs } from '@/components/ui/tabs';
import { Monitor, Smartphone } from 'lucide-react';
import { useState } from 'react';

export function PreviewWebMobile() {
  const tabs = [
    {
      title: <Monitor size={28} />,
      value: 'nacional',
      content: <></>,
    },
    {
      title: <Smartphone size={28} />,
      value: 'global',
      content: <></>,
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 overflow-hidden my-10 lg:my-20">
        <div className="z-10 flex flex-col gap-4 items-center justify-center">
          <div className="w-full">
            <p className="text-white text-4xl lg:text-6xl text-left !font-light font-hankenGrotesk mb-6">
              <span className="whitespace-pre-wrap tracking-tighter bg-gradient-to-br from-[#FF7F00] from-40% to-[#508FF4] to-80% text-transparent bg-clip-text">
                Maximize suas vendas{' '}
              </span>
              com uma experiência de compra única e de alta perfomance
            </p>
          </div>

          {tabIndex == 0 && (
            <Safari url="magicui.design" className="size-full max-h-[70vh]" />
          )}

          {tabIndex == 1 && (
            <Android className="size-full max-h-[70vh] ml-12" />
          )}

          <div className="relative z-50 -mt-8">
            <Tabs
              tabs={tabs}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex} // Passa a função setTabIndex para o Tabs
              tabClassName="text-white"
              containerClassName="!w-max !mx-auto !py-1 !px-1 !bg-[#393939] !justify-center !border !border-solid !border-gray !rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
