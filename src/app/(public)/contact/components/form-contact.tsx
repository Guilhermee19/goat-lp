'use client';

import TextAnimationDegrade from '@/app/_components/title-animation';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Form, Input, Textarea } from '@/components/ui';
import { ContactFormDataType, contactSchema } from '@/schemas/contact-schema';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/button';

export function FormContact() {
  const form = useForm<ContactFormDataType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async ({
    name,
    email,
    subject,
    message,
  }: ContactFormDataType) => {
    console.log(name, email, subject, message);
    // try {
    //   const {
    //     data: { token },
    //   } = await mutateAsync({ email, password });

    //   setAccessToken({ accessToken: token });

    //   router.push('/home');
    // } catch (error: unknown) {
    //   console.log(error);

    //   const { variant, description } = onError(error);
    //   toast({ variant, description });
    // }
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center my-10 lg:my-20 lg:p-8">
      <div className="max-w-3xl w-full flex flex-col justify-center items-center mb-6">
        <TextAnimationDegrade
          title={['Fale com um especialista']}
          className="mt-5 items-start hidden lg:flex"
          classText="!text-4xl lg:!text-6xl"
        ></TextAnimationDegrade>

        <TextAnimationDegrade
          title={['Fale com um', 'especialista']}
          className="mt-5 flex lg:hidden items-center"
          classText="!text-4xl lg:!text-6xl"
        ></TextAnimationDegrade>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="w-full text-label text-center mt-2 !text-xl font-sourceSans3 font-normal"
        >
          Se precisar de nossa ajuda, tiver dúvidas sobre como usar a plataforma
          ou estiver enfrentando dificuldades técnicas não hesite em nos
          contatar.
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
              <label className="text-sm text-white font-light">Assunto*</label>
              <Input
                type="text"
                name="subject"
                placeholder="Qual o assunto?"
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
              placeholder="Escreva sobre o que precisa"
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
