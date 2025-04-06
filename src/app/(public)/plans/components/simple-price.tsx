'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SimplePrice() {
  const PLANS = [
    {
      type: 'Starter',
      price: 47,
      recommended: false,
      benefits: [
        'Loja Online Completa e Personalizável',
        'Landing Pages Ilimitadas',
        'Domínio Próprio + SSL',
        'Layout One Page e 3 Etapas ',
        'Relatório Financeiro Detalhado',
        'Upsell, Crossel e Orderbump',
        'Link de Compra',
        'Cupons de Desconto',
        'Descontos Progressivos',
        'Provas Sociais',
        'E-mais Transacionais Personalizáveis',
        'Recuperar de Pedidos via E-mail e WhatsApp',
      ],
    },
    {
      type: 'Growth',
      price: 197,
      recommended: true,
      benefits: [
        'Loja Online Completa e Personalizável',
        'Landing Pages Ilimitadas',
        'Domínio Próprio + SSL',
        'Layout One Page e 3 Etapas ',
        'Relatório Financeiro Detalhado',
        'Upsell, Crossel e Orderbump',
        'Link de Compra',
        'Cupons de Desconto',
        'Descontos Progressivos',
        'Provas Sociais',
        'E-mais Transacionais Personalizáveis',
        'Recuperar de Pedidos via E-mail e WhatsApp',
      ],
    },
    {
      type: 'Goat',
      price: 497,
      recommended: false,
      benefits: [
        'Loja Online Completa e Personalizável',
        'Landing Pages Ilimitadas',
        'Domínio Próprio + SSL',
        'Layout One Page e 3 Etapas ',
        'Relatório Financeiro Detalhado',
        'Upsell, Crossel e Orderbump',
        'Link de Compra',
        'Cupons de Desconto',
        'Descontos Progressivos',
        'Provas Sociais',
        'E-mais Transacionais Personalizáveis',
        'Recuperar de Pedidos via E-mail e WhatsApp',
      ],
    },
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto flex lg:p-4 flex-col lg:flex-row justify-between items-center my-10 gap-4">
      <div className="w-full flex flex-col items-center gap-4 mt-20">
        <TextAnimationDegrade
          title={['Preços simples e transparentes']}
          className="items-center hidden lg:flex"
          classText="!text-3xl md:!text-5xl !text-7xl"
        ></TextAnimationDegrade>
        <TextAnimationDegrade
          title={['Preços simples e', 'transparentes']}
          className="items-center flex lg:hidden"
          classText="!text-xl md:!text-3xl !text-5xl"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="max-w-4xl w-11/12 text-label text-center mt-4 !text-xl font-sourceSans3 font-normal"
        >
          Preços que acompanham o crescimento do seu negócio, dessa forma você
          nunca estará pagando mais do que precisa.
        </TextAnimate>

        <div className="w-full grid lg:grid-cols-3 gap-8 mt-10">
          {PLANS.map((el, idx) => (
            <div
              key={idx}
              className={cn(
                'size-full rounded-2xl p-[1px]',
                {
                  'bg-[#212429]': !el.recommended,
                },
                {
                  'bg-gradient-to-tr from-[#797C83] from-0%  via-[#212429] via-50% to-[#4D5056] to-100%':
                    el.recommended,
                },
              )}
            >
              <div
                className={cn(
                  'size-full rounded-2xl p-4',
                  {
                    'bg-gradient-to-b from-[#1D1D1D] to-[#000000]':
                      !el.recommended,
                  },
                  {
                    'bg-gradient-to-b from-[#271C0F] from-20% to-[#00363D] to-100%':
                      el.recommended,
                  },
                )}
              >
                <TextAnimationDegrade
                  title={[el.type]}
                  className="items-start"
                  classText="!text-lg font-bold tracking-tight"
                ></TextAnimationDegrade>

                <p className="text-white text-4xl font-hankenGrotesk font-light my-6">
                  R$ {el.price}/mês
                </p>

                <Button
                  className={cn(
                    'w-full shadow-2xl min-w-max py-3 rounded-full flex justify-center items-center text-center bg-white',
                    { 'bg-main': el.recommended },
                    { 'text-main': !el.recommended },
                  )}
                >
                  Teste grátis por 7 dias
                </Button>

                <div className="w-11/12 mx-auto flex flex-col gap-3 my-6">
                  {el.benefits.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-white text-base font-hankenGrotesk"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
