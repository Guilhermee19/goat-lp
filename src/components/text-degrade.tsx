'use client';

import { cn } from '@/lib/utils';

export function TextDegrade({
  text,
  className,
  size = 'medium',
  position,
}: {
  text: string;
  className?: string;
  size?: 'very_small' | 'small' | 'medium' | 'large';
  position: 'left' | 'center' | 'right';
}) {
  return (
    <span
      className={cn(
        `whitespace-pre-wrap !leading-[1.1] tracking-normal space text-transparent bg-clip-text 
        bg-gradient-to-br from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% 
        font-hankenGrotesk font-light`,
        className,
        { 'text-xl lg:text-3xl': size === 'very_small' },
        { 'text-3xl lg:text-5xl': size === 'small' },
        { 'text-4xl lg:text-6xl': size === 'medium' },
        { 'text-4xl lg:text-8xl': size === 'large' },
        { '!text-start': position === 'left' },
        { '!text-center': position === 'center' },
        { '!text-end': position === 'right' },
      )}
    >
      {text}
    </span>
  );
}
