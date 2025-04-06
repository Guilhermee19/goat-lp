'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingPages = ({
  pages,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  pages: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow' | 'very_slow';
  widthCard?: number;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else if (speed === 'slow') {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '160s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {pages.map((item, idx) => (
          <li
            className="relative w-[280px] lg:w-[400px] max-w-full shrink-0"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 w-[calc(48%_+_4px)]"
              ></div>

              <div className="relative z-20 flex flex-col items-start justify-center py-4 gap-4">
                <Image
                  width={50}
                  height={50}
                  src={item.thumbnail}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
