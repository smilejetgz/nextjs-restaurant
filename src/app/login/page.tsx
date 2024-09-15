import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/features/shadcn/components/ui/card';
import { Input } from '@/features/shadcn/components/ui/input';
import Link from 'next/link';
import { Button } from '@/features/shadcn/components/ui/button';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter email for login your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mt-2">Email</p>
          <Input type="email" placeholder="Email" />
          <p className="mt-2">Password</p>
          <Input type="password" placeholder="Password" />
          <Button className="mt-2">Login</Button>
        </CardContent>
        <CardFooter>
          <Link
            className="text-sm text-blue-300 underline hover:text-blue-700"
            href={'/register'}
          >
            go to register page
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
