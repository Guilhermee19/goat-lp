'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthApi } from '@/service/endpoints';
import Button from '@/components/button';
import { Form } from '@/components/ui/form';
import InputField from '@/components/input-field';
import PasswordField from '@/components/password-field';
import { useMutation } from '@tanstack/react-query';
import { LoginFormDataType, loginSchema } from '@/schemas';
import { useAccessTokenStore } from '@/store';
import { useToast } from '@/hooks/use-toast';
import { onError } from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '@/shared/icon/icon';

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<LoginFormDataType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });
  const { mutateAsync, isLoading } = useMutation({ mutationFn: AuthApi.login });
  const { setAccessToken } = useAccessTokenStore();

  const onSubmit = async ({ email, password }: LoginFormDataType) => {
    try {
      const {
        data: { token },
      } = await mutateAsync({ email, password });

      setAccessToken({ accessToken: token });

      router.push('/dashboard');
    } catch (error: unknown) {
      console.log(error);

      const { variant, description } = onError(error);
      toast({ variant, description });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputField name="email" label="Endereço de e-mail" />
        <PasswordField name="password" label="Senha" />
        <div className="text-right">
          <Link href="/forgot-password" className="text-sm text-blue-500">
            Esqueci minha senha
          </Link>
        </div>
        <Button type="submit" className="w-full" isLoading={isLoading}>
          INICIAR SESSÃO
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
