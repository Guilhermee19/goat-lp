'use client';

export function VideoHeader() {
  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg p-5 overflow-hidden">
        <div className="z-10 min-h-[600px] flex flex-col gap-4 items-center justify-center">
          {/* <div className="rounded-full border max-w-max border-[#250e64] bg-[#170921]">
            <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#B69BFA] to-[#6A29EA] opacity-60 text-transparent bg-clip-text">
              vender
            </p>
          </div> */}

          <p>
            Revolucionando o jeito de <span>vender online</span>
          </p>

          <div className="aspect-video bg-gradient-to-b from-[#262626] to-[#000000] p-2"></div>
        </div>
      </div>
    </>
  );
}
