import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/features/shadcn/components/ui/card';
import { Input } from '@/features/shadcn/components/ui/input';
import Link from 'next/link';
import { Button } from '@/features/shadcn/components/ui/button';

const LoginPage = () => {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter email for login your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center">
            <div className="w-full">
              <p className="mt-2">Name</p>
              <Input type="name" placeholder="Full name" />
              <p className="mt-2">Email</p>
              <Input type="email" placeholder="Email" />
              <p className="mt-2">Password</p>
              <Input type="password" placeholder="Password" />
            </div>
            <div className="mt-2 w-full text-right">
              <Button className="mt-2">Register</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Link
        className="py-2 text-sm text-blue-300 underline hover:text-blue-700"
        href={'/login'}
      >
        go to login page
      </Link>
    </div>
  );
};

export default LoginPage;
