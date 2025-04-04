'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const Plans = () => {
  const PLANS = [
    { type: 'Starter', price: 47, recommended: false, benefits: [] },
    { type: 'Growth', price: 197, recommended: true, benefits: [] },
    { type: 'Goat', price: 497, recommended: false, benefits: [] },
  ];
  return (
    <div className="w-11/12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
      <div className="w-full flex flex-col items-center gap-4 mt-20">
        <TextAnimationDegrade
          title={['Preços simples e transparentes']}
          className="items-center hidden lg:flex"
          classText="!text-2xl md:!text-4xl !text-6xl"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="max-w-4xl w-11/12 text-label text-center mt-4 !text-xl font-sourceSans3 font-normal"
        >
          Preços que acompanham o crescimento do seu negócio, dessa forma você
          nunca estará pagando mais do que precisa.
        </TextAnimate>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 mt-10">
          {PLANS.map((el, idx) => (
            <div key={idx}>
              <p> {el.type} </p>
              <p> {el.type} </p>

              <Button
                className={cn(
                  'shadow-2xl min-w-max py-3 w-full lg:w-max bg-white',
                  { 'bg-main': el.recommended },
                )}
              >
                <span
                  className={cn(
                    'rounded-full text-center w-full flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-main font-hankenGrotesk lg:text-lg',
                    { 'text-white': el.recommended },
                  )}
                >
                  Teste grátis por 7 dias
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
