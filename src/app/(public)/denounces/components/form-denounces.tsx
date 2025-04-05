'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Form, Input, Textarea } from '@/components/ui';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/button';
import {
  DenouncesFormDataType,
  denouncesSchema,
} from '@/schemas/denounces-schema';

export function FormDenounces() {
  const form = useForm<DenouncesFormDataType>({
    resolver: zodResolver(denouncesSchema),
    defaultValues: {
      name: '',
      email: '',
      link: '',
      message: '',
    },
  });

  const onSubmit = async ({
    name,
    email,
    link,
    message,
  }: DenouncesFormDataType) => {
    console.log(name, email, link, message);
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center my-10 lg:my-20 lg:p-8">
      <div className="max-w-3xl w-full flex flex-col justify-center items-center mb-6">
        <TextAnimationDegrade
          title={['Denuncie pra gente!']}
          className="mt-5 items-start hidden lg:flex"
          classText="!text-4xl lg:!text-6xl"
        ></TextAnimationDegrade>

        <TextAnimationDegrade
          title={['Denuncie pra', ' gente!']}
          className="mt-5 flex lg:hidden items-center"
          classText="!text-4xl lg:!text-6xl"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="w-full text-label text-center mt-2 !text-xl font-sourceSans3 font-normal"
        >
          Encontrou alguma loja ou página com atividade suspeita ou foi vítima
          de golpe?
        </TextAnimate>
        <TextAnimate
          animation="slideUp"
          by="word"
          className="w-full text-label text-center !text-xl font-sourceSans3 font-normal"
        >
          Nos envie os detalhes através do formulário abaixo.
        </TextAnimate>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-xl mx-auto space-y-8"
        >
          <div className="w-full mt-4">
            <label className="text-sm text-white font-light">Seu nome*</label>
            <Input
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              className="mt-2 bg-[#1D1D1D] border border-solid border-[#393939] placeholder:text-[#7D7D7D]"
            />
          </div>

          <div className="w-full grid lg:grid-cols-2 gap-4">
            <div className="w-full mt-4">
              <label className="text-sm text-white font-light">E-mail*</label>
              <Input
                type="text"
                name="email"
                placeholder="Digite um e-mail"
                className="mt-2 bg-[#1D1D1D] border border-solid border-[#393939] placeholder:text-[#7D7D7D]"
              />
            </div>
            <div className="w-full mt-4">
              <label className="text-sm text-white font-light">
                Link da loja ou página
              </label>
              <Input
                type="text"
                name="link"
                placeholder="Qual o link da página suspeita??"
                className="mt-2 bg-[#1D1D1D] border border-solid border-[#393939] placeholder:text-[#7D7D7D]"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="text-sm text-white font-light">
              Sua mensagem*
            </label>
            <Textarea
              name="message"
              placeholder="Descreva mais detalhes sobre a denúncia, como o tipo de atividade
suspeita que está sendo realizada..."
              rows={6}
              className="mt-2 bg-[#1D1D1D] border border-solid border-[#393939] resize-none placeholder:text-[#7D7D7D]"
            />
          </div>

          <Image
            src={'reCAPTCHA.png'}
            width={300}
            height={68}
            alt="reCAPTCHA"
            className="w-10/12 max-w-72 mt-4"
          ></Image>

          <Button
            className="w-full shadow-2xl min-w-max py-2 flex justify-center rounded-full items-center mt-4 bg-[#FF5500] hover:g-[#FF5500]"
            type="submit"
          >
            <span className="w-max whitespace-pre-wrap text-center flex gap-2 items-center !text-base font-bold leading-none tracking-tight text-white font-hankenGrotesk lg:text-lg">
              Falar com a nossa equipe
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
