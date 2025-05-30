'use clinet';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextDegrade } from '@/components/text-degrade';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function PlatformFeatures() {
  const DIFFERENTIALS = [
    {
      title: 'Layouts otimizados',
      subtitle:
        'Experiência de compra fluida e intuitiva para maior conversão.',
      url: '/layouts-otimizados.png',
      classHeader: '',
      className: '',
    },
    {
      title: 'Loja pronta para faturar',
      subtitle:
        'Monte sua estrutura rapidamente e comece a vender sem complicação.',
      url: '/loja-pronta-para-fatura.png',
      classHeader: '',
      className: '',
    },
    {
      title: 'Automação de vendas',
      subtitle:
        'Remarketing, e-mails automáticos e estratégias de retenção integradas.',
      url: '/automacao-de-vendas.png',
      classHeader: '',
      className: '',
    },
    {
      title: 'Funis inteligentes',
      subtitle:
        'Order bumps, upsells e downsells para extrair o máximo de cada cliente.',
      url: '/funis-inteligentes.png',
      classHeader: '',
      className: '',
    },
  ];

  return (
    <div className="w-full rounded-t-3xl mt-20 bg-gradient-to-b from-[#1D1D1D] to-[#000000]">
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg px-2 py-5 lg:px-5 lg:py-10 overflow-hidden">
        <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
          <TextDegrade
            text="O que faz da GOATCOM a escolha ideal para seu e-commerce"
            className="lg:max-w-5xl from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="left"
            size="large"
          ></TextDegrade>

          <div className="w-full grid lg:grid-cols-2 gap-y-20 gap-x-12 mt-6">
            {DIFFERENTIALS.map((el, idx) => (
              <div key={idx} className={(cn('w-full'), el.className)}>
                <div className={(cn('w-full'), el.classHeader)}>
                  <p className="max-w-xl text-white font-hankenGrotesk text-3xl lg:text-5xl font-light">
                    {el.title}
                  </p>
                  <p className="lg:min-h-16 text-label font-sourceSans3 text-base lg:text-xl font-light my-2 lg:my-6">
                    {el.subtitle}
                  </p>
                </div>

                <Image
                  src={el.url}
                  width={590}
                  height={600}
                  alt={el.title}
                  className="w-full object-contain lg:mt-10 aspect-square"
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
