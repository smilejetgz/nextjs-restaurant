import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
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
            className="text-blue-300 underline text-sm hover:text-blue-700"
            href={"/register"}
          >
            go to register page
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
