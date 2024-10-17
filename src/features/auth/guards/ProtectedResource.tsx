import { Loading } from '@/features/ui/components/Status';
import { type UserRole } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { type ReactNode } from 'react';

interface ProtectedResourceProps {
  roles?: UserRole[];
  label?: string | null;
  children: ReactNode;
}

const ProtectedResource = ({
  roles,
  label = 'loading...',
  children,
}: ProtectedResourceProps) => {
  const { data: session, status } = useSession();

  if (status === 'loading')
    return label ? (
      <div className="flex min-h-screen items-center justify-center">
        <Loading label={label} />
      </div>
    ) : null;
  if (status === 'unauthenticated') return null;
  if (
    status === 'authenticated' &&
    roles &&
    !roles.includes(session.user.role)
  ) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedResource;
