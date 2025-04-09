'use client';

import { useState } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/service/locale';
import Button from './button';
import Image from 'next/image';

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string; flagUrl: string }>;
};

export default function LocaleSwitcher({ defaultValue, items }: Props) {
  const [currentLocale, setCurrentLocale] = useState(defaultValue);

  function onClick() {
    const currentIndex = items.findIndex(
      (item) => item.value === currentLocale,
    );
    const nextIndex = (currentIndex + 1) % items.length;
    const nextLocale = items[nextIndex].value;

    setCurrentLocale(nextLocale);
    const locale = nextLocale as Locale;
    setUserLocale(locale);
  }

  const currentItem = items.find((item) => item.value === currentLocale);

  return (
    <div className="relative">
      <Button
        onClick={onClick}
        className="flex size-10 items-center gap-2 bg-transparent aspect-square rounded-full transition-colors border-[#626262] border-solid border-[1.49px] p-1"
      >
        <Image
          width={28}
          height={28}
          src={currentItem?.flagUrl || ''}
          alt={currentItem?.label || ''}
          className="size-7 rounded-full object-cover"
        />
      </Button>
    </div>
  );
}
