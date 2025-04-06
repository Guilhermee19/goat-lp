'use client';

import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function GridMarketing() {
  const GRID = [
    {
      url: '/automacao-de-vendas.png',
      className: 'flex-col lg:flex-row',
      title: 'Recuperação de carrinho integrada',
      options: [
        'Automação de e-mails para recuperar vendas perdidas.',
        'Segmentação de clientes para ações personalizadas.',
        'Notificações automáticas para incentivar a conclusão da compra.',
      ],
    },
    {
      url: '/cellphone-notifications.png',
      className: 'flex-col-reverse lg:flex-row-reverse',
      title: 'Funis de vendas para escalar faturamento',
      options: [
        'Order bumps, upsells e downsells para aumentar o ticket médio.',
        'Testes A/B para otimizar cada campanha.',
        'Integração com plataformas de tráfego pago e remarketing.',
      ],
    },
    {
      url: '/user-graphic-notebook.png',
      className: 'flex-col lg:flex-row',
      title: 'SEO otimizado para ranquear no topo',
      options: [
        'Estrutura pronta para indexação rápida no Google.',
        'URLs amigáveis e carregamento ultrarrápido.',
        'Meta tags e descrições otimizadas para conversão.',
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
