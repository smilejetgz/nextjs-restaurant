import { remove } from '@/features/cart/api';
import { type NextRequest, NextResponse } from 'next/server';
import { getServerAuthSession } from '@/features/auth/auth';

interface Params {
  params: {
    id: string;
  };
}

export const DELETE = async (_req: NextRequest, { params: { id } }: Params) => {
  const session = await getServerAuthSession();
  if (!session) return Response.json({ err: 'Please login' }, { status: 401 });

  console.log('id', id);
  const cart = await remove(session.user.id, id);
  return NextResponse.json(cart, { status: 200 });
};
