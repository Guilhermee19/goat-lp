'use client';

import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import { AuroraText } from '@/components/magicui/aurora-text';

const ScrollVelocity = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-10 overflow-hidden h-[200px] lg:h-[500px]">
      <div className="-rotate-3 py-2 lg:py-8 bg-degrade-green-dark border border-solid border-[#393939]">
        <VelocityScroll
          className="text-white"
          defaultVelocity={2}
          numRows={1}
          reverse={false}
        >
          <span className="px-6 lg:px-12">
            <AuroraText className="font-light font-hankenGrotesk text-2xl lg:text-6xl">
              Simples, rápido e sem complicação
            </AuroraText>
          </span>
        </VelocityScroll>
      </div>

      <div className="rotate-3 py-2 lg:py-8 bg-degrade-green-dark border border-solid border-[#393939]">
        <VelocityScroll
          className="text-white"
          defaultVelocity={1}
          numRows={1}
          reverse={true}
        >
          <span className="px-6 lg:px-12">
            <AuroraText className="font-light font-hankenGrotesk text-2xl lg:text-6xl">
              Venda como um verdadeiro GOAT
            </AuroraText>
          </span>
        </VelocityScroll>
      </div>
    </div>
  );
};

export default ScrollVelocity;
