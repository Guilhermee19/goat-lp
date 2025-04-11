'use client';

import { Meteors } from '@/components/magicui/meteors';
import { TextAnimate } from '@/components/magicui/text-animate';
import dynamic from 'next/dynamic';
// import TextAnimationDegrade from '../../app/_components/title-animation';
import { TextDegrade } from '../text-degrade';
import { GlobeConfig } from '../ui/globe';
import { LINES } from '../../../public/mocks/lines';
import { ShimmerButton } from '../magicui/shimmer-button';
import Icon from '@/shared/icon/icon';

const GlobalCheckout = () => {
  const globeConfig: GlobeConfig = {
    pointSize: 1, // Menor ponto para aumentar a quantidade
    globeColor: 'rgba(14, 51, 102, 0.5)', // Cor mais escura para o fundo
    showAtmosphere: true,
    atmosphereColor: 'rgba(14, 51, 102, 0.5)', // Atmosfera suave e escura
    atmosphereAltitude: 0.5, // Atmosfera mais espessa
    emissive: 'rgba(14, 51, 102, 0.5)', // Cor luminosa
    emissiveIntensity: 0.5, // Intensidade baixa para um brilho suave
    shininess: 0.1, // Um pouco mais de brilho
    polygonColor: '#168359', // Branco suave
    ambientLight: 'rgba(255, 255, 255, 1)', // Cor dos pontos dos sampleArcs
    directionalLeftLight: 'rgba(14, 138, 209, 0.5)', // Luz direcional fria
    directionalTopLight: 'rgba(255, 255, 255, 0.5)', // Luz direcional para o topo
    pointLight: 'rgba(255, 251, 174, 0.5)', // Luz dos pontos
    arcTime: 3000, // Tempo mais lento para os arcos
    arcLength: 0.5, // Menor distância nos arcos
    rings: 1, // Adicionar mais anéis para mais interatividade
    maxRings: 0.4, // Limite de anéis
    initialPosition: { lat: 36.0079407, lng: -161.5441817 }, // Posição inicial alterada
    autoRotate: true,
    autoRotateSpeed: 2, // Velocidade de rotação mais lenta
  };

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
          size="large"
        ></TextDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="lg:max-w-2xl lg:w-11/12 text-white text-center mt-8 text-lg font-sourceSans3 font-normal"
        >
          Seu negócio sem fronteiras. Alcance clientes internacionais sem dor de
          cabeça.
        </TextAnimate>

        <div className="relative w-full aspect-square flex justify-center items-center">
          <div className="absolute z-30 flex flex-col justify-center items-center gap-[26px]">
            <p className="max-w-lg text-center font-hankenGrotesk leading-none text-4xl lg:text-[72px] font-light text-white">
              Seu negócio sem fronteiras
            </p>

            <p className="font-inter font-normal text-lg lg:text-xl text-white text-center">
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

          <div className="absolute w-11/12 max-w-4xl aspect-square animate-spin-slow flex items-center bg-transparent justify-center rounded-full opacity-90 bg-gradient-to-r from-[#d0f0fd00] from-60% to-[#109DE3] to-100%">
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

          {/* <div id="markerLabel" class="hidden">
            <button id="closeButton">X</button>
            <div class="text" id="idNum"></div>
            <div class="text" id="magnitude"></div>
            <div class="text" id="coordinates"></div>
          </div> */}

          <World data={LINES.pulls} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default GlobalCheckout;
