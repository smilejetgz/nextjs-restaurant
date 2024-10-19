import { add, findAll } from '@/features/cart/api';
import { type NextRequest, NextResponse } from 'next/server';
import { getServerAuthSession } from '@/features/auth/auth';
import { type AddCartItem } from '@/features/cart/types';

export const GET = async () => {
  const session = await getServerAuthSession();
  if (!session) return Response.json({ err: 'Please login' }, { status: 401 });

  const cart = await findAll(session.user.id);

  return NextResponse.json(cart, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  const session = await getServerAuthSession();
  if (!session) return Response.json({ err: 'Please login' }, { status: 401 });

  const { productId } = await (req.json() as Promise<AddCartItem>);
  const cart = await add(session.user.id, productId);

  return NextResponse.json(cart, { status: 200 });
};
