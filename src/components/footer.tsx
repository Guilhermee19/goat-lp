'use client';

import GoatAnimation from '@/app/_components/goat-animation';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const LINKS = [
    {
      label: 'Legal',
      href: '/about-us',
    },
    {
      label: 'Disclaimer',
      href: '/disclaimer',
    },
    {
      label: 'Política de Privacidade',
      href: '/privacy-policies',
    },
    {
      label: 'Políticas',
      href: '/policies',
    },
    {
      label: 'Termo de uso',
      href: '/terms-of-use',
    },
  ];

  const GOATCOM = [
    {
      label: 'Quem Somos',
      href: '/about-us',
    },
    {
      label: 'Planos e Preços',
      href: '/plans',
    },
    {
      label: 'Contato',
      href: '/contact',
    },
    {
      label: 'Termos e Compliance',
      href: '/contact',
    },
    {
      label: 'Página de Status',
      href: '/contact',
    },
  ];

  const PRODUTOS = [
    {
      label: 'Checkout Nacional',
      href: '/checkout-national',
    },
    {
      label: 'Checkout Global',
      href: '/checkout-global',
    },
    {
      label: 'Loja Virtual',
      href: '/online-shop',
    },
    {
      label: 'Landing Pages',
      href: '/landing-page',
    },
    {
      label: 'Temas',
      href: '/themes',
    },
    {
      label: 'Personalização',
      href: '/linkedin-ads',
    },
  ];

  const RECURSOS = [
    {
      label: 'Venda Global',
      href: '/global-sales',
    },
    {
      label: 'Relatórios',
      href: '/help',
    },
    {
      label: 'Apps e integrações',
      href: '/api',
    },
  ];

  const OUTROS = [
    {
      label: 'Denúncias',
      href: '/denounces',
    },
    {
      label: 'Depoimentos',
      href: '/testimonials',
    },
    {
      label: 'Parceiros',
      href: '/support',
    },
    {
      label: 'Recompensas',
      href: '/contact',
    },
  ];

  return (
    <div className="bg-black">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center pb-8 gap-4">
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-4 mt-20 mb-10">
          <div id="Logo" className="w-full lg:w-max">
            <Image
              src={'logotipo.png'}
              width={100}
              height={50}
              alt="Logotipo"
            ></Image>

            <p className="text-[#949494] text-xs font-sourceSans3 font-light my-3">
              Copyright © Goatcon.
            </p>

            <Image
              src={'google-partner.png'}
              width={100}
              height={50}
              alt="Logotipo"
              className="w-28 h-14 object-cover"
            ></Image>
          </div>

          <div
            id="Rotas"
            className="w-full lg:w-max grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="w-full lg:w-max flex flex-col items-start gap-4">
              <p className="text-white font-light font-sourceSans3">Goatcom</p>
              {GOATCOM.map((el, idx) => (
                <Link
                  key={idx}
                  href={el.href}
                  className="text-[#737373] font-light font-sourceSans3"
                >
                  {el.label}
                </Link>
              ))}
            </div>

            <div className="w-full lg:w-max flex flex-col items-start gap-4">
              <p className="text-white font-light font-sourceSans3">Produtos</p>
              {PRODUTOS.map((el, idx) => (
                <Link
                  key={idx}
                  href={el.href}
                  className="text-[#737373] font-light font-sourceSans3"
                >
                  {el.label}
                </Link>
              ))}
            </div>

            <div className="w-full lg:w-max flex flex-col items-start gap-4">
              <p className="text-white font-light font-sourceSans3">Recursos</p>
              {RECURSOS.map((el, idx) => (
                <Link
                  key={idx}
                  href={el.href}
                  className="text-[#737373] font-light font-sourceSans3"
                >
                  {el.label}
                </Link>
              ))}
            </div>

            <div className="w-full lg:w-max flex flex-col items-start gap-4">
              <p className="text-white font-light font-sourceSans3">Outros</p>
              {OUTROS.map((el, idx) => (
                <Link
                  key={idx}
                  href={el.href}
                  className="text-[#737373] font-light font-sourceSans3"
                >
                  {el.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          id="Links"
          className="flex justify-center items-center flex-wrap gap-10 my-10"
        >
          {LINKS.map((el, idx) => (
            <Link
              key={idx}
              href={el.href}
              className="text-label hover:text-white "
            >
              {el.label}
            </Link>
          ))}
        </div>

        <p className="w-max font-sourceSans3 text-base text-[#737373]">
          © 2025 Goatcom. All rights reserved
        </p>

        <div className="ml-20">
          <GoatAnimation className="size-72"></GoatAnimation>
        </div>
      </div>
    </div>
  );
}
