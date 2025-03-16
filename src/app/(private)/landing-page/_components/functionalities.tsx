'use client';

import { Tabs } from '@/components/ui/tabs';
import Image from 'next/image';

export function Functionalities() {
  const tabs = [
    {
      title: 'Chechout Nacional',
      value: 'nacional',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Chechout Global',
      value: 'global',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Landing Pages',
      value: 'landing-page',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'E-commerces',
      value: 'ecommerces',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mt-20">
      <h2 className="font-hankenGrotesk font-extralight text-white w-full text-center text-4xl">
        <span className="underline"> Tudo que você precisa </span>, em um só
        lugar.
      </h2>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs
          tabs={tabs}
          tabClassName="text-white"
          containerClassName="!w-max !mx-auto !py-2 !px-3 !justify-center !border !border-solid !border-[#393939] !rounded-full"
        />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
