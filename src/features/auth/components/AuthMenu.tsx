import { Avatar, AvatarImage } from '@/features/shadcn/components/ui/avatar';
import { Button } from '@/features/shadcn/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/features/shadcn/components/ui/dropdown-menu';
import { getImagePath } from '@/features/shared/helpers/upload';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { CircleUser } from 'lucide-react';

const AuthMenu = () => {
  const { data: session, status } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none">
        <Button variant="secondary" size="icon" className="rounded-full">
          {!session ? (
            <>
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </>
          ) : (
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  session?.user.image
                    ? getImagePath(session.user.image)
                    : '/assets/images/user.png'
                }
                alt={session?.user.name ?? 'Anonymous User'}
              ></AvatarImage>
            </Avatar>
          )}
        </Button>
      </DropdownMenuTrigger>
      {status === 'authenticated' && (
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/auth/profile">Edit Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuItem asChild>
            <span onClick={() => signOut({ redirect: false })}>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
      {status === 'unauthenticated' && (
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/auth/register">Sign Up</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/auth/login">Sign In</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default AuthMenu;
