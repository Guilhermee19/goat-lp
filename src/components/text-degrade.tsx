'use client';

import { cn } from '@/lib/utils';

export function TextDegrade({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'whitespace-pre-wrap !leading-[1.1] tracking-normal space bg-gradient-to-br from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% text-transparent bg-clip-text text-4xl lg:text-6xl font-hankenGrotesk font-light',
        className,
      )}
    >
      {text}
    </span>
  );
}
