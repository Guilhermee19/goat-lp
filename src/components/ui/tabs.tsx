'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type Tab = {
  title: React.ReactNode;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  tabIndex,
  setTabIndex,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          'flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full',
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setTabIndex(idx)} // Atualiza o tabIndex ao clicar na aba
            className={cn('relative px-4 py-1 rounded-full', tabClassName)}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {tabIndex === idx && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={cn(
                  'absolute inset-0 bg-white rounded-full ',
                  activeTabClassName,
                )}
              />
            )}

            <span
              className={cn('relative block', {
                'text-black font-semibold': tabIndex === idx, // Destaca a aba ativa
              })}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};
