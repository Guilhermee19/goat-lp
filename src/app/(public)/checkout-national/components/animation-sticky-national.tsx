'use client';

import Icon from '@/shared/icon/icon';
import Image from 'next/image';

export function AnimationStickyNational() {
  const GRID = [
    {
      title: 'Pagamentos instantâneos',
      description:
        'Aceite Pix, boleto, cartão de crédito e outras formas de pagamento sem burocracia.',
      url: '/credit card.png',
    },
    {
      title: 'Conversão otimizada',
      description:
        'Processo de compra rápido e fluido para garantir que o cliente finalize o pedido sem obstáculos.',
      url: '/buy-custom-product.png',
    },
    {
      title: 'Segurança avançada',
      description:
        'Antifraude integrado e criptografia de ponta para transações seguras.',
      url: '/code.png',
    },
    {
      title: 'Recuperação automática de vendas',
      description:
        'Estratégias nativas para reengajar clientes que abandonaram o carrinho.',
      url: '/sales-automation.png',
    },
  ];
  return (
    <div className="relative w-11/12 max-w-7xl mx-auto rounded-lg lg:p-5 mt-20">
      <div className="relative w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-6">
        <div className="w-full lg:w-8/12 h-max lg:sticky lg:top-4" id="sticky">
          <p className="max-w-2xl text-white text-4xl text-start mb-10 !font-light font-hankenGrotesk">
            O que faz do Checkout Nacional da
            <span className="whitespace-pre-wrap tracking-tighter bg-gradient-to-br from-[#FF7F00] from-40% to-[#508FF4] to-80% text-transparent bg-clip-text">
              GOATCOM
            </span>{' '}
            imbatível
          </p>

          <Image
            src={'/user-computer.png'}
            width={740}
            height={510}
            alt="user computer"
          ></Image>
        </div>

        <div className="w-full lg:w-[440px] col-span-3 mt-8 lg:mt-0">
          {GRID.map((el, idx) => (
            <div key={idx} className="mb-8">
              <div className="flex items-center justify-start gap-2">
                <Icon
                  name="circle_chevron_right"
                  className="min-size-5 size-5 text-base text-main"
                ></Icon>
                <p className="w-10/12 text-white text-xl lg:text-3xl font-hankenGrotesk font-light">
                  {el.title}
                </p>
              </div>
              <p className="text-label text-lg lg:text-xl font-sourceSans3 font-light my-4">
                {el.description}{' '}
              </p>

              <div className="w-full aspect-square bg-gradient-to-b from-[#0A201D] to-[#0A201D4D] flex justify-center items-center">
                <Image src={el.url} width={440} height={530} alt=""></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
