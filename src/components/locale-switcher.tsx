'use client';

import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en'),
          flagUrl: '/country-flag/en.svg',
        },
        {
          value: 'pt',
          label: t('pt'),
          flagUrl: '/country-flag/pt.svg',
        },
        {
          value: 'es',
          label: t('es'),
          flagUrl: '/country-flag/es.svg',
        },
      ]}
    />
  );
}
