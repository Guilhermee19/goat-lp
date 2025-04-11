'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function GoatAnimation({
  className,
  classBallon,
}: {
  className?: string;
  classBallon?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Função para tocar o som
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Recomeça o áudio se já estiver tocando
      audioRef.current.play();
    }
  };

  useEffect(() => {
    // Verifica se o áudio foi carregado corretamente
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  return (
    <div
      className={cn(
        'relative size-96 flex justify-center items-center',
        className,
      )}
      onMouseEnter={() => {
        setIsHovered(true);
        playSound(); // Toca o áudio quando o mouse entra
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem do animal (Goat) */}
      <motion.img
        src="animal-goat.png"
        alt="Goat Animation"
        viewport={{ once: true }}
        className="w-full h-full object-contain"
        initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        animate={
          isHovered
            ? { opacity: 1, scale: 1.1, x: 0, y: 0, rotate: -5 }
            : { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
        }
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      />

      {/* Imagem do balão de conversa */}
      <motion.img
        src="balloon-chat.png"
        alt="Balão de conversa"
        viewport={{ once: true }}
        className={cn('absolute top-3 right-3 w-36 md:w-40', classBallon)}
        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
        animate={
          isHovered
            ? { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
            : { opacity: 0, scale: 0, x: -40, y: 40, rotate: -10 }
        }
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      />

      {/* Elemento de áudio */}
      <audio ref={audioRef} src="/GOAT.mp3" preload="auto" />
    </div>
  );
}
