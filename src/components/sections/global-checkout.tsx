'use client';

import { Meteors } from '@/components/magicui/meteors';
import { TextAnimate } from '@/components/magicui/text-animate';
import dynamic from 'next/dynamic';
// import TextAnimationDegrade from '../../app/_components/title-animation';
import { TextDegrade } from '../text-degrade';
import { GlobeConfig } from '../ui/globe';
import { IconCloud } from '../magicui/icon-cloud';
import { ShimmerButton } from '../magicui/shimmer-button';
import Icon from '@/shared/icon/icon';

export function GlobalCheckout() {
  const globeConfig: GlobeConfig = {
    pointSize: 1, // Menor ponto para aumentar a quantidade
    globeColor: '#0a264c', // Cor mais escura para o fundo
    showAtmosphere: true,
    atmosphereColor: '#ffffff', // Atmosfera suave e escura
    atmosphereAltitude: 0, // Atmosfera mais espessa
    emissive: '#0a264c', // Cor luminosa
    emissiveIntensity: 0.5, // Intensidade baixa para um brilho suave
    shininess: 0.1, // Um pouco mais de brilho
    polygonColor: '#1e7767', // Branco suave
    ambientLight: '#ffff00', // Cor dos pontos dos sampleArcs
    directionalLeftLight: '#ffffff', // Luz direcional fria
    directionalTopLight: '#ffffff', // Luz direcional para o topo
    pointLight: '#fff38a', // Luz dos pontos
    arcTime: 2000, // Tempo mais lento para os arcos
    arcLength: 0.1, // Menor distância nos arcos
    rings: 1, // Adicionar mais anéis para mais interatividade
    maxRings: 3, // Limite de anéis
    initialPosition: { lat: -22.9068, lng: -43.1729 }, // Posição inicial alterada
    autoRotate: true,
    autoRotateSpeed: 0, // Velocidade de rotação mais lenta
  };

  const colors = ['#fff'];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const slugs = ['typescript', 'javascript', 'dart'];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  const World = dynamic(() => import('../ui/globe').then((m) => m.World), {
    ssr: false,
  });

  return (
    <div className="w-full mx-auto rounded-lg lg:p-5 mt-20 overflow-hidden">
      <div className="z-10 min-h-[600px] flex flex-col gap-4 items-center justify-center">
        <div className="rounded-full border max-w-max border-[#0a2633] bg-[#0a1920]">
          <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#D0F0FD] to-[#109DE3] opacity-60 text-transparent bg-clip-text">
            Checkout Global
          </p>
        </div>

        <TextDegrade
          text="Venda para qualquer lugar do mundo"
          className="max-w-2xl from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
          position="center"
        ></TextDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="lg:max-w-2xl lg:w-11/12 text-white text-center mt-8 text-lg font-sourceSans3 font-normal"
        >
          Seu negócio sem fronteiras. Alcance clientes internacionais sem dor de
          cabeça.
        </TextAnimate>

        <div className="relative w-[80vw] max-w-5xl aspect-square flex justify-center items-center">
          <div className="absolute z-30 flex flex-col justify-center items-center gap-[26px]">
            <p className="max-w-lg text-center font-hankenGrotesk leading-none text-[72px] font-light text-white">
              Seu negócio sem fronteiras
            </p>

            <p className="font-inter font-normal text-xl text-white">
              Alcance clientes internacionais sem dor de cabeça.{' '}
            </p>

            <ShimmerButton
              className="w-max shadow-2xl min-w-max py-2"
              background="#FF5500"
            >
              <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
                Crie sua conta
                <Icon name="arrow_right" className="size-4"></Icon>
              </span>
            </ShimmerButton>
          </div>

          <div className="absolute w-11/12 aspect-square animate-spin-slow flex items-center bg-transparent justify-center rounded-full opacity-90 bg-gradient-to-r from-[#d0f0fd00] from-60% to-[#109DE3] to-100%">
            <div className="w-full h-full m-px bg-black rounded-full flex items-center justify-center"></div>
          </div>

          <div className="absolute left-10 top-0 w-full h-[35vh]">
            <Meteors number={12} minDelay={0.4} angle={215} />
          </div>
          <div className="absolute w-full h-[35vh]">
            <Meteors number={11} minDelay={0.5} angle={218} />
          </div>

          <div className="absolute left-10 bottom-0 w-full h-[35vh]">
            <Meteors number={13} minDelay={0.3} angle={220} />
          </div>

          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
