'use client';

import { useToast } from '@/features/shadcn/hooks/use-toast';
import { Loading } from '@/features/ui/components/Status';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';

interface GuestOnlyRouteProps {
  children: ReactNode;
}

const GuestOnlyRoute = ({ children }: GuestOnlyRouteProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'authenticated') {
      toast({ description: 'You are already logged in' });
      router.push('/');
      return;
    }
  }, [router, toast, status]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loading label="loading..." />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return <>{children}</>;
  }

  return null;
};

export default GuestOnlyRoute;
