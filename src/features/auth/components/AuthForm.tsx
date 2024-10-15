import type * as types from '@/features/auth/types';
import * as validators from '@/features/auth/validators';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/features/shadcn/components/ui/card';
import { Input } from '@/features/shadcn/components/ui/input';
import { Button } from '@/features/shadcn/components/ui/button';
import Link from 'next/link';
import { capitalize } from 'lodash';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/features/shadcn/components/ui/form';

type AuthFormProps =
  | {
      kind: 'login';
      onSubmit: SubmitHandler<types.Signin>;
    }
  | {
      kind: 'register';
      onSubmit: SubmitHandler<types.Signup>;
    };

const AuthForm = ({ kind, onSubmit }: AuthFormProps) => {
  const form = useForm<
    typeof onSubmit extends SubmitHandler<types.Signin>
      ? types.Signin
      : types.Signup
  >({
    resolver: zodResolver(
      kind === 'login' ? validators.signin : validators.signup,
    ),
    defaultValues:
      kind === 'login'
        ? {
            email: '',
            password: '',
          }
        : {
            name: '',
            telephone: '',
            email: '',
            password: '',
          },
  });

  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{capitalize(kind)}</CardTitle>
          <CardDescription>
            Enter email for {kind} your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center">
            <div className="w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 text-sm"
                  autoComplete="off"
                >
                  {kind === 'register' && (
                    <>
                      <FormField
                        control={form.control}
                        name={'name'}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name :</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormDescription>
                              Please enter your full name.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={'telephone'}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telephone :</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Telephone number"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Please enter your telephone number.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  <FormField
                    control={form.control}
                    name={'email'}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email :</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormDescription>
                          We&apos;ll never share your email with anyone else.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={'password'}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password :</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Password must be at least 8 characters.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="mt-2 w-full text-right">
                    <Button className="mt-2" type="submit">
                      {capitalize(kind)}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </CardContent>
      </Card>
      {kind === 'register' ? (
        <Link
          className="py-2 text-sm text-blue-300 underline hover:text-blue-700"
          href={'/auth/login'}
        >
          go to login page
        </Link>
      ) : (
        <Link
          className="py-2 text-sm text-blue-300 underline hover:text-blue-700"
          href={'/auth/register'}
        >
          go to register page
        </Link>
      )}
    </div>
  );
};

export default AuthForm;
