'use client';

import SwiperCoverflow from '@/app/_components/swiper-react-effect-coverflow';
import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextAnimate } from '@/components/magicui/text-animate';
import Image from 'next/image';

export function CarouselPresentation() {
  const list_testimonials = [
    {
      title: 'Chechout Nacional',
      value: 'nacional',
      content: (
        <UserTestimonials
          name={['Roberta Ramalho']}
          subtitle="Fundadora e-commerce vendas"
          description={[
            'Meu nome é Roberta Ramalho e trabalho com e-commerce, mais especificamente, com dropshipping',
            'O mercado digital entrou na minha vida no meio da pandemia: todos em casa, e eu que nunca gostei de ficar parada, por indicação do meu esposo, comecei a estudar sobre o drop.',
            'Desde o início, trabalhamos com Yampi, e as funcionalidades da plataforma para loja virtual nos auxiliam muito a finalizar vendas e entender o real cenário do nosso negócio.',
          ]}
          profile_user="user-testimonials.png"
        ></UserTestimonials>
      ),
    },
    {
      title: 'Chechout Global',
      value: 'global',
      content: (
        <UserTestimonials
          name={['Roberta Ramalho']}
          subtitle="Fundadora e-commerce vendas"
          description={[
            'Meu nome é Roberta Ramalho e trabalho com e-commerce, mais especificamente, com dropshipping',
            'O mercado digital entrou na minha vida no meio da pandemia: todos em casa, e eu que nunca gostei de ficar parada, por indicação do meu esposo, comecei a estudar sobre o drop.',
            'Desde o início, trabalhamos com Yampi, e as funcionalidades da plataforma para loja virtual nos auxiliam muito a finalizar vendas e entender o real cenário do nosso negócio.',
          ]}
          profile_user="user-testimonials.png"
        ></UserTestimonials>
      ),
    },
    {
      title: 'Landing Pages',
      value: 'landing-page',
      content: (
        <UserTestimonials
          name={['Roberta Ramalho']}
          subtitle="Fundadora e-commerce vendas"
          description={[
            'Meu nome é Roberta Ramalho e trabalho com e-commerce, mais especificamente, com dropshipping',
            'O mercado digital entrou na minha vida no meio da pandemia: todos em casa, e eu que nunca gostei de ficar parada, por indicação do meu esposo, comecei a estudar sobre o drop.',
            'Desde o início, trabalhamos com Yampi, e as funcionalidades da plataforma para loja virtual nos auxiliam muito a finalizar vendas e entender o real cenário do nosso negócio.',
          ]}
          profile_user="user-testimonials.png"
        ></UserTestimonials>
      ),
    },
    {
      title: 'E-commerces',
      value: 'ecommerces',
      content: (
        <UserTestimonials
          name={['Roberta Ramalho']}
          subtitle="Fundadora e-commerce vendas"
          description={[
            'Meu nome é Roberta Ramalho e trabalho com e-commerce, mais especificamente, com dropshipping',
            'O mercado digital entrou na minha vida no meio da pandemia: todos em casa, e eu que nunca gostei de ficar parada, por indicação do meu esposo, comecei a estudar sobre o drop.',
            'Desde o início, trabalhamos com Yampi, e as funcionalidades da plataforma para loja virtual nos auxiliam muito a finalizar vendas e entender o real cenário do nosso negócio.',
          ]}
          profile_user="user-testimonials.png"
        ></UserTestimonials>
      ),
    },
  ];

  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center gap-2 rounded-lg p-5 overflow-hidden">
        <TextAnimationDegrade
          title={['Histórias inspiradoras de', 'pessoas e experiências']}
          className="mt-5 hidden lg:flex"
        ></TextAnimationDegrade>

        <TextAnimationDegrade
          title={['Histórias', 'inspiradoras de', 'pessoas e', 'experiências']}
          className="mt-5 flex lg:hidden"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="lg:max-w-2xl lg:w-11/12 text-white text-center mt-4 text-lg font-sourceSans3 font-normal"
        >
          Depoimentos de pessoas que enfrentaram dificuldades e viram as
          soluções para seus problemas em nossa plataforma.
        </TextAnimate>
      </div>

      <div className="w-full mt-4">
        <SwiperCoverflow tabs={list_testimonials} isLoop={true} />
      </div>
    </>
  );
}

const UserTestimonials = ({
  name,
  subtitle,
  description,
  profile_user,
}: {
  name: string[];
  subtitle: string;
  description: string[];
  profile_user: string;
}) => {
  return (
    <div className="w-11/12 mx-auto lg:w-full bg-gradient-to-b from-[rgb(10,32,29)] to-[rgba(10,32,29,0.3)] rounded-[40px] p-6 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between border border-solid border-[#393939]">
      <div className="relative z-50 w-full lg:w-1/2 max-w-max">
        <TextAnimationDegrade
          title={name}
          className="items-start"
          classText="text-lg md:text-2xl lg:text-4xl"
        ></TextAnimationDegrade>

        <p className="max-w-96 text-base lg:text-lg text-white mt-2 lg:mt-0">
          {subtitle}
        </p>

        {description.map((el, idx) => (
          <TextAnimate
            key={idx}
            animation="slideUp"
            by="word"
            className=" text-label text-left text-base font-sourceSans3 font-normal my-4"
          >
            {el}
          </TextAnimate>
        ))}
      </div>

      <Image
        width={450}
        height={450}
        className="max-w-60 w-11/12 lg:w-1/2 size-full object-contain"
        alt="User Testimonials"
        src={profile_user}
      ></Image>
    </div>
  );
};
