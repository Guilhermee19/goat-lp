'use client';

import { TextAnimate } from '@/components/magicui/text-animate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

export function WhatDrivesUs({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const EXPAND = [
    {
      title: 'Inovação que gera resultados',
      description:
        'Criamos soluções que não apenas seguem tendências, mas definem o futuro do e-commerce.',
    },
    {
      title: 'Simplicidade sem perder poder',
      description:
        'Criamos soluções que não apenas seguem tendências, mas definem o futuro do e-commerce.',
    },
    {
      title: 'Compromisso com seu crescimento ',
      description:
        'Criamos soluções que não apenas seguem tendências, mas definem o futuro do e-commerce.',
    },
  ];

  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col justify-center my-10 lg:my-20 items-center p-5">
        {title && (
          <p className="font-hankenGrotesk text-5xl text-white text-center font-light">
            {title}
          </p>
        )}

        {description && (
          <TextAnimate
            animation="slideUp"
            by="word"
            className="max-w-4xl w-full text-label text-center mt-4 !text-xl font-sourceSans3 font-normal"
          >
            {description}
          </TextAnimate>
        )}

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 mt-10 lg:mt-20">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-lg"
            defaultValue="item-0"
          >
            {EXPAND.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="w-full border border-solid border-[#393939] rounded-2xl mb-2 px-4"
              >
                <AccordionTrigger className="text-white font-hankenGrotesk font-light text-left text-xl hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#7D7D7D] font-hankenGrotesk font-light text-xl mb-4">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-b from-[#0D2B27] to-[#0D2B274D]">
            <Image
              src={'navegador-light.png'}
              width={520}
              height={340}
              alt="Online store"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
