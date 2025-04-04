'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GoatAnimation({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'relative size-96 flex justify-center items-center',
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src="animal-goat.png"
        alt="Goat Animation"
        className="w-full h-full object-contain"
        initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        animate={
          isHovered
            ? { opacity: 1, scale: 1.1, x: 0, y: 0, rotate: -5 }
            : { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
        }
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      />

      <motion.img
        src="balloon-chat.png"
        alt="Balão de conversa"
        className="absolute top-5 right-5 w-36 md:w-52"
        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
        animate={
          isHovered
            ? { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
            : { opacity: 0, scale: 0, x: -40, y: 40, rotate: -10 }
        }
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      />
    </div>
  );
}
