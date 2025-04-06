'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import Image from 'next/image';
import { useState } from 'react';

export function PaymentApis() {
  const TABS = [
    { label: 'Todos', filter: '' },
    { label: 'Pixel Analytics', filter: 'Publicidade' },
    { label: 'Sistema de Frete', filter: 'Frete' },
    { label: 'ERP e Nota Fiscal', filter: 'ERP' },
    { label: 'Atendimento', filter: 'Atendimento' },
    { label: 'Processamento de Pedido', filter: 'Comunicação' },
    { label: 'Gateways', filter: 'Pagamentos' },
    { label: 'Plataforma', filter: 'E-commerce' },
  ];

  const APIS = [
    {
      logo: 'apis/logo-api-facebook.png',
      name: 'Facebook',
      type: 'Publicidade',
    },
    { logo: 'apis/logo-api-taboola.png', name: 'Taboola', type: 'Publicidade' },
    { logo: 'apis/logo-api-google.png', name: 'Google', type: 'Publicidade' },
    { logo: 'apis/logo-api-tiktok.png', name: 'TikTok', type: 'Publicidade' },
    { logo: 'apis/logo-api-correios.png', name: 'Correios', type: 'Frete' },
    {
      logo: 'apis/logo-api-outbrain.png',
      name: 'Outbrain',
      type: 'Publicidade',
    },
    {
      logo: 'apis/logo-api-malhor-envio.png',
      name: 'Melhor Envio',
      type: 'Frete',
    },
    {
      logo: 'apis/logo-api-rastreio-net.png',
      name: 'Rastreio.net',
      type: 'Frete',
    },
    { logo: 'apis/logo-api-bling.png', name: 'Bling', type: 'ERP' },
    { logo: 'apis/logo-api-notazz.png', name: 'Notazz', type: 'ERP' },
    {
      logo: 'apis/logo-api-whatsapp.png',
      name: 'WhatsApp',
      type: 'Comunicação',
    },
    {
      logo: 'apis/logo-api-reportana.png',
      name: 'Reportana',
      type: 'Atendimento',
    },
    { logo: 'apis/logo-api-wiio.png', name: 'Wiio', type: 'E-commerce' },
    { logo: 'apis/logo-api-dropi.png', name: 'Dropi', type: 'E-commerce' },
    {
      logo: 'apis/logo-api-dropi.png',
      name: 'Drop Nacional',
      type: 'E-commerce',
    },
    {
      logo: 'apis/logo-api-tryplo-pay.png',
      name: 'Tryplo Pay',
      type: 'Pagamentos',
    },
    {
      logo: 'apis/logo-api-cashtime.png',
      name: 'Cashtime',
      type: 'Pagamentos',
    },
    {
      logo: 'apis/logo-api-dom-pagamentos.png',
      name: 'Dom Pagamentos',
      type: 'Pagamentos',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  const handleTabChange = (filter: string) => {
    setActiveTab(filter);
    setFilter(filter);
  };

  return (
    <div className="w-full rounded-t-3xl mt-20 bg-gradient-to-b from-[#1D1D1D] to-[#000000]">
      <div className="w-11/12 max-w-7xl min-h-dvh mx-auto rounded-lg px-2 py-5 lg:px-5 lg:py-10 overflow-hidden">
        <div className="relative w-full flex flex-col justify-start gap-4 lg:gap-6">
          <TextAnimationDegrade
            title={[
              'A GOATCOM se conecta ao que há de melhor no ',
              'mercado para você vender sem limites.',
            ]}
            className="hidden lg:flex justify-start items-start"
            classText="!text-2xl md:!text-4xl lg:!text-6xl"
          ></TextAnimationDegrade>
          <TextAnimationDegrade
            title={[
              'A GOATCOM se',
              'conecta ao que há',
              'de melhor no',
              'mercado para você',
              'vender sem limites.',
            ]}
            className="flex lg:hidden justify-start items-start"
            classText="!text-2xl md:!text-4xl lg:!text-6xl !m-0"
          ></TextAnimationDegrade>

          <div className="min-w-max overflow-x-auto flex mb-6 ">
            {TABS.map((tab, idx) => (
              <div
                key={idx}
                onClick={() => handleTabChange(tab.filter)}
                className={`${activeTab === tab.filter ? 'border-main text-label' : 'border-[#393939] text-label'} border-b min-w-max py-2 px-6 text-center w-full cursor-pointer`}
              >
                {tab.label}
              </div>
            ))}
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 mt-2">
            {APIS.filter(
              (item) => item.type.includes(activeTab) || filter === '',
            ).map((el, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col gap-4 p-4 rounded-xl bg-[#000000] border border-solid border-[#393939]"
              >
                <Image
                  src={el.logo}
                  width={116}
                  height={32}
                  alt="Logo"
                  className="w-max"
                ></Image>

                <p className="text-white font-inter font-semibold text-lg">
                  {el.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
