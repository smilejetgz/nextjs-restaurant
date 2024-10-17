import { add, findAll } from '@/features/cart/api';
import { NextResponse } from 'next/server';
import { getServerAuthSession } from '@/features/auth/auth';
import { type AddCartItem } from '@/features/cart/types';

export const GET = async () => {
  const session = await getServerAuthSession();
  if (!session) return Response.json({ err: 'Please login' }, { status: 401 });

  const cart = await findAll(session.user.id);

  return NextResponse.json(cart, { status: 200 });
};

export const POST = async (req: NextResponse) => {
  const session = await getServerAuthSession();
  if (!session) return Response.json({ err: 'Please login' }, { status: 401 });

  const { productId } = await (req.json() as Promise<AddCartItem>);
  console.log('productId : ', productId);
  console.log('session.user.id : ', session);
  const cart = await add(session.user.id, productId);

  return NextResponse.json(cart, { status: 200 });
};
