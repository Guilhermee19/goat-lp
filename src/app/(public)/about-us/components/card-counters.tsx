'use client';

import { NumberTicker } from '@/components/magicui/number-ticker';

export function CardCounters() {
  const COUNTERS = [
    {
      title: 'Clientes',
      sigla: '+',
      count: 5000,
    },
    {
      title: 'Países',
      sigla: '',
      count: 4,
    },
    {
      title: 'Funcionários',
      sigla: '',
      count: 300,
    },
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto flex flex-col border border-solid border-[#525252] justify-center my-10 lg:my-20 items-center p-5">
      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center py-6 gap-10">
        {COUNTERS.map((el, idx) => (
          <div
            className="w-max flex justify-center items-center flex-col"
            key={idx}
          >
            <div className="flex justify-center items-center max-w-max text-base gap-1 py-1 px-4 font-bold ">
              {el.sigla && (
                <p className="text-4xl font-light text-[#e78223]">{el.sigla}</p>
              )}

              <NumberTicker
                value={el.count}
                className="whitespace-pre-wrap text-4xl font-light font-hankenGrotesk tracking-tighter bg-gradient-to-br from-[#FF7F00] from-20% to-[#508FF4] to-100% text-transparent bg-clip-text"
              />
            </div>

            <p className="text-white text-sm"> {el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
