'use client';

// import { AuroraText } from '@/components/magicui/aurora-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { cn } from '@/lib/utils';
import Icon from '@/shared/icon/icon';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import TextAnimationDegrade from '../../app/_components/title-animation';
import { TextDegrade } from '../text-degrade';

const fadeInScaleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // ⏳ Tempo de espera entre os itens
      delayChildren: 0.2, // ⏳ Delay inicial antes do primeiro item aparecer
    },
  },
};

// const fadeInScaleItem = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
// };

const RecuperacaoVenda = () => {
  return (
    <div className="relative overflow-hidden aspect-square lg:aspect-auto h-full min-h-[200px] lg:min-h-[300px] transition-all bg-degrade-green-dark hover:bg-degrade-green-dark-hover group flex justify-center items-center !rounded-3xl border border-solid border-gray">
      <div className="w-full lg:max-w-xs flex flex-col justify-center items-center gap-4">
        <Image
          src={'/chat.png'}
          className="w-10/12 h-2/4 object-cover aspect-video transition !transition-duration-3000 group-hover:-translate-y-2"
          width={150}
          height={150}
          alt=""
        />

        <div
          className={cn(
            'font-bold tracking-tighter flex flex-col items-center justify-center',
          )}
        >
          <TextDegrade
            text="Recuperação de venda"
            className="max-w-48 from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% transition !transition-duration-3000 group-hover:scale-105 group-hover:!font-bold"
            position="center"
            size="very_small"
          ></TextDegrade>
        </div>
      </div>
    </div>
  );
};

const SegurancaPonta = () => {
  return (
    <div className="relative overflow-hidden aspect-square lg:aspect-auto h-full min-h-[200px] lg:min-h-[300px] transition-all bg-degrade-green-dark hover:bg-degrade-green-dark-hover group flex justify-center items-center !rounded-3xl border border-solid border-gray">
      <div
        className={cn(
          'w-full lg:max-w-xs flex flex-col justify-center items-center gap-6',
        )}
      >
        <div
          className={cn(
            'font-bold tracking-tighter flex flex-col items-center justify-center',
          )}
        >
          <TextDegrade
            text="Segurança de ponta"
            className="max-w-48 from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% transition !transition-duration-3000 group-hover:translate-y-2 group-hover:font-bold"
            position="center"
            size="very_small"
          ></TextDegrade>
        </div>

        <Image
          src={'/block.png'}
          className={cn(
            'w-10/12 h-2/4 object-cover aspect-video transition !transition-duration-3000 group-hover:translate-y-2',
          )}
          width={150}
          height={150}
          alt=""
        />
      </div>
    </div>
  );
};

const Pagamentos = () => {
  return (
    // <div className="relative overflow-hidden lg:aspect-auto h-full min-h-[200px] lg:min-h-[300px] transition-all bg-degrade-green-dark flex justify-center items-center !rounded-3xl border border-solid border-gray lg:!col-span-2 !aspect-auto">
    <div className="relative bg-degrade-green-dark border hover:bg-degrade-green-dark-hover group border-solid border-[#393939] lg:!col-span-2 rounded-3xl">
      <Image
        src={'/background-card.png'}
        className="absolute top-0 right-0 size-9/12 min-h-[250px] lg:min-h-[100px] aspect-square object-cover object-left-top opacity-10"
        width={150}
        height={150}
        alt=""
      />

      <div className="relative z-20 p-12 flex flex-col justify-between lg:items-end">
        <Image
          src={'/foguete.png'}
          className="w-10/12 max-w-80 h-2/4 object-cover g:w-5/12 ml-auto aspect-video mb-8 transition !transition-duration-3000 group-hover:-translate-y-4 group-hover:translate-x-8"
          width={295}
          height={297}
          alt=""
        />

        <div className="w-full flex justify-between flex-col lg:flex-row items-start lg:items-end">
          <TextDegrade
            text="Pagamentos instantâneos"
            className="max-w-48 from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% transition !transition-duration-3000 group-hover:scale-105 hidden lg:flex"
            position="left"
            size="very_small"
          ></TextDegrade>

          <TextDegrade
            text="Pagamentos instantâneos"
            className="max-w-48 from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% transition !transition-duration-3000 group-hover:scale-105 flex lg:hidden"
            position="left"
            size="very_small"
          ></TextDegrade>

          <p className="max-w-64 text-white text-sm mt-4 !font-light">
            Aceite Pix, boleto, cartão de crédito e mais, sem burocracia.
          </p>
        </div>
      </div>
    </div>
  );
};

const Processamento = () => {
  return (
    // <div className="relative overflow-hidden aspect-square lg:aspect-auto h-full min-h-[200px] lg:min-h-[300px] transition-all bg-degrade-green-dark flex justify-center items-center !rounded-3xl border border-solid border-gray">
    <div className="relative h-full bg-degrade-green-dark hover:bg-degrade-green-dark-hover group !rounded-3xl border border-solid border-[#393939]">
      <div className="w-full lg:max-w-xs flex flex-col justify-center items-center gap-6 p-12">
        <TextDegrade
          text="Processamento Ultra Rápido"
          className="max-w-48 from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% !text-2xl !font-bold transition !transition-duration-3000 group-hover:scale-105"
          position="center"
          size="very_small"
        ></TextDegrade>

        <Image
          src={'/time.png'}
          className="w-full aspect-[5/4] object-cover transition !transition-duration-3000 group-hover:translate-y-2 group-hover:scale-105"
          width={211}
          height={198}
          alt=""
        />
      </div>
    </div>
  );
};

const Integracoes = () => {
  return (
    // <div className="relative overflow-hidden lg:aspect-auto h-full min-h-[200px] lg:min-h-[300px] transition-all bg-degrade-green-dark flex justify-center items-center !rounded-3xl border border-solid border-gray lg:col-span-2 !aspect-auto">
    <div className="relative h-full flex flex-col justify-between overflow-hidden lg:aspect-auto bg-degrade-green-dark hover:bg-degrade-green-dark-hover group !rounded-3xl border border-solid border-[#393939] lg:col-span-2 !aspect-auto">
      <Image
        src={'/background-card-2.png'}
        className="absolute top-0 right-0 size-9/12 min-h-[250px] lg:min-h-[100px] aspect-square object-cover object-left-top opacity-10"
        width={150}
        height={150}
        alt=""
      />

      <div className="size-full flex flex-col-reverse lg:flex-row justify-between items-end p-12">
        <div
          className={cn(
            'font-bold tracking-tighter flex flex-col gap-4 items-start justify-start mt-auto',
          )}
        >
          <div className="md:min-w-max rounded-full border max-w-max border-[#013820] bg-[#0A201D]">
            <p className="md:max-w-max text-xs py-1 px-3 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
              Integramos com os melhores meios de pagamentos
            </p>
          </div>

          <TextDegrade
            text="Integracoes"
            className="from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% transition !transition-duration-3000 group-hover:scale-110 group-hover:translate-x-2"
            position="left"
            size="small"
          ></TextDegrade>
        </div>

        <Image
          src={'/58befad4a8235fe3fd1864ac8f171ba2.png'}
          className="w-10/12 h-2/4 object-cover lg:w-6/12 mx-auto lg:mx-0 !aspect-square mb-auto transition !transition-duration-3000 group-hover:rotate-2 group-hover:translate-x-2 group-hover:scale-105"
          width={150}
          height={150}
          alt=""
        />
      </div>
    </div>
  );
};

const VendaMundo = () => {
  return (
    <div className="relative overflow-hidden aspect-square lg:aspect-auto h-full min-h-[200px] lg:min-h-[300px] transition-all bg-degrade-green-dark hover:bg-degrade-green-dark-hover group flex justify-center items-center !rounded-3xl border border-solid border-gray">
      <div className="w-full lg:max-w-xs flex justify-center items-center gap-4 !max-w-full flex-col-reverse">
        <Image
          src={'/background-card-3.png'}
          className="absolute top-0 right-0 min-h-[250px] lg:min-h-[100px] aspect-square !size-full !object-contain !object-left-top opacity-20"
          width={150}
          height={150}
          alt=""
        />

        <div
          className={cn(
            'font-bold tracking-tighter flex flex-col justify-center !items-start lg:!items-center',
          )}
        >
          <TextDegrade
            text="Venda no mundo todo"
            className="max-w-48 from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100% transition !transition-duration-3000 group-hover:font-bold group-hover:scale-105"
            position="center"
            size="very_small"
          ></TextDegrade>

          <p className="text-white text-sm font-sourceSans3 mt-2 !font-light">
            Seja global com a Goatcom!
          </p>
        </div>

        <Image
          src={'/local.png'}
          className="w-10/12 h-2/4 object-cover aspect-video transition !transition-duration-3000 group-hover:translate-x-1 group-hover:translate-y-1"
          width={150}
          height={150}
          alt=""
        />
      </div>
    </div>
  );
};

const NationalCheckout = () => {
  return (
    <div className="contanierPage !p-0 mt-20">
      <div className="z-10 lg:min-h-[600px]">
        <div className="w-full flex flex-col gap-16 items-center justify-center">
          <div className="rounded-full border max-w-max border-[#013820] bg-[#0A201D]">
            <p className="max-w-max text-base py-1 px-4 font-bold bg-gradient-to-r from-[#00FFC2] to-[#28CAE0] opacity-60 text-transparent bg-clip-text">
              Checkout Nacional
            </p>
          </div>

          <TextDegrade
            text="Converta sem limites no Brasil"
            className="lg:max-w-xl from-[#ffffff] from-20% via-[#FF7F00] via-50% to-[#508FF4] to-100%"
            position="center"
            size="large"
          ></TextDegrade>

          <TextAnimate
            animation="slideUp"
            by="word"
            className="max-w-3xl text-white text-center mt-4 lg:mt-8 text-lg lg:text-xl font-sourceSans3 font-normal"
          >
            Venda mais, sem barreiras. Nosso checkout foi projetado para
            eliminar fricções e garantir conversões absurdas.
          </TextAnimate>

          <div className="w-full lg:w-max flex items-center flex-col lg:flex-row gap-6 mt-10">
            <ShimmerButton
              className="shadow-2xl min-w-max py-2 w-full lg:w-max"
              background="#FF5500"
            >
              <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
                Criar sua conta
                <Icon name="arrow_right" className="size-4"></Icon>
              </span>
            </ShimmerButton>

            <ShimmerButton
              className="!shadow-none min-w-max py-2 w-full lg:w-max"
              background="#191919"
              shadow={false}
            >
              <span className="whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
                Veja como funciona
              </span>
            </ShimmerButton>
          </div>
        </div>

        <motion.div className="w-full h-full flex flex-col lg:grid lg:grid-cols-4 gap-4 mt-7 lg:mt-14">
          <RecuperacaoVenda></RecuperacaoVenda>
          <SegurancaPonta></SegurancaPonta>
          <Pagamentos></Pagamentos>
          <Processamento></Processamento>
          <Integracoes></Integracoes>
          <VendaMundo></VendaMundo>
        </motion.div>
      </div>
    </div>
  );
};

export default NationalCheckout;
