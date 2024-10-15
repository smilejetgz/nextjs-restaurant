'use client';

import AuthForm from '@/features/auth/components/AuthForm';
import { type Signin } from '@/features/auth/types';
import { useToast } from '@/features/shadcn/hooks/use-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { toast } = useToast();
  const submit = async (credentials: Signin) => {
    const result = await signIn('credentials', {
      ...credentials,
      redirect: false,
    });

    if (result?.ok) {
      toast({ description: 'Welcome back! ' });
      router.replace('/');
    }
    if (result?.error) {
      toast({ description: 'Invalid Credentials' });
    }
  };

  return <AuthForm kind="login" onSubmit={submit} />;
};

export default Login;
