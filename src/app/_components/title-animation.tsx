'use client';

import { AuroraText } from '@/components/magicui/aurora-text';
import { cn } from '@/lib/utils';

export default function TextAnimationDegrade({
  title,
  className,
  classText,
}: {
  title: string[];
  className?: string;
  classText?: string;
}) {
  return (
    <p
      className={cn(
        'font-bold tracking-tighter flex flex-col items-center justify-center text-4xl md:text-8xl lg:text-8xl',
        className,
      )}
    >
      {title.map((text, idx) => (
        <AuroraText
          key={idx}
          className={cn(
            `font-light font-hankenGrotesk text-4xl md:text-8xl lg:text-8xl ${idx > 0 ? '-mt-3' : ''}`,
            classText,
          )}
        >
          {text}
        </AuroraText>
      ))}
    </p>
  );
}
