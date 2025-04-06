'use client';

import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function GridReports() {
  const GRID = [
    {
      url: '/painel-metrics.png',
      className: 'flex-col-reverse lg:flex-row-reverse',
      title: 'Painel completo de métricas',
      options: [
        'Acompanhe faturamento, conversões e taxa de abandono de carrinho.',
        'Identifique produtos mais vendidos e picos de tráfego.',
        'Relatórios de performance para otimizar campanhas.',
      ],
    },
    {
      url: '/graphic-vendas.png',
      className: 'flex-col lg:flex-row',
      title: 'Análises de vendas em tempo real',
      options: [
        'Dados atualizados para decisões rápidas.',
        'Comparação de períodos para identificar tendências.',
        'Integração com Google Analytics e Facebook Pixel.',
      ],
    },
    {
      url: '/notifications-clients.png',
      className: 'flex-col-reverse lg:flex-row-reverse',
      title: 'Segmentação avançada de clientes',
      options: [
        'Entenda o comportamento do seu público.',
        'Personalize ofertas e campanhas com base em dados reais.',
        'Aumente a retenção e o LTV (Lifetime Value) dos seus clientes.',
      ],
    },
  ];
  return (
    <div className="relative w-11/12 max-w-7xl mx-auto my-20">
      <div className="relative w-full flex flex-col gap-10 lg:gap-20">
        {GRID.map((el, idx) => (
          <div
            key={idx}
            className={cn(
              'w-full flex justify-between items-center gap-4',
              el.className,
            )}
          >
            <Image
              src={el.url}
              width={620}
              height={720}
              alt={el.title}
              className="w-full lg:w-1/2 max-w-[620px]"
            ></Image>

            <div className="w-full lg:w-1/2 max-w-xl mb-4">
              <p className="text-white text-2xl lg:text-5xl"> {el.title} </p>

              <div className="w-full flex flex-col gap-1 my-4">
                {el.options.map((text) => (
                  <div key={text} className="w-full flex items-center gap-2">
                    <Icon name="check" className="size-4 text-main"></Icon>
                    <p className="text-label text-base lg:text-xl">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
