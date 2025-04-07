'use client';

// import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextDegrade } from '@/components/text-degrade';
import Icon, { icons } from '@/shared/icon/icon';

export function WhyGoatcom() {
  const GRID: {
    icon: keyof typeof icons;
    title: string;
    description: string;
  }[] = [
    {
      icon: 'cart_shopping',
      title: 'Checkout imbatível',
      description: 'Rápido, seguro e otimizado para conversão.',
    },
    {
      icon: 'table_pivot_edit',
      title: 'Landing Pages estratégicas',
      description: 'Criadas para capturar leads e impulsionar vendas.',
    },
    {
      icon: 'chart_pie_simple',
      title: 'E-commerce pronto para escalar',
      description: 'Sua loja otimizada para faturar mais.',
    },
    {
      icon: 'code_simple',
      title: 'Tecnologia de alta performance',
      description:
        'Sem lentidão, sem instabilidade, apenas vendas no máximo potencial.',
    },
  ];
  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 overflow-hidden my-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6">
          <div className="w-full lg:w-max flex flex-col gap-4 items-start justify-start">
            <TextDegrade
              text="Por que a GOATCOM?"
              className="lg:max-w-md from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% text-start"
            ></TextDegrade>

            {/* <TextAnimationDegrade
              title={['Por que a', 'GOATCOM?']}
              className="mt-5 items-start"
              classText="!text-4xl lg:!text-6xl"
            ></TextAnimationDegrade> */}

            <TextAnimate
              animation="slideUp"
              by="word"
              className="max-w-lg w-full text-label text-left mt-2 !text-xl font-sourceSans3 font-normal"
            >
              Seja para quem está começando ou para negócios que já faturam
              milhões, a GOATCOM é a plataforma que leva as vendas para o
              próximo nível.
            </TextAnimate>
          </div>

          <div className="w-full lg:w-1/2 grid lg:grid-cols-2 gap-4">
            {GRID.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start lg:aspect-grid justify-start gap-2 p-4 rounded-lg bg-[#1d1d1d] shadow-sm"
              >
                <div className="size-10 bg-[#0D2B27] rounded-md p-2 mb-4">
                  <Icon name={item.icon} className="text-4xl text-white" />
                </div>

                <p className="text-white text-2xl font-hankenGrotesk font-light">
                  {item.title}
                </p>

                <TextAnimate
                  animation="slideUp"
                  by="word"
                  className="text-white text-left !text-xl font-sourceSans3 !font-light"
                >
                  {item.description}
                </TextAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
