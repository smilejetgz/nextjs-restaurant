import db from '@/features/shared/db';

export const findAll = async (userId: string) => {
  const cart = await db.cart.findMany({
    orderBy: { createdAt: 'desc' },
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });

  return cart;
};

export const add = async (userId: string, productId: string) => {
  const cart = await db.cart.upsert({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
    update: { quantity: { increment: 1 } },
    create: {
      userId,
      productId,
      quantity: 1,
    },
  });

  return cart;
};

export const remove = async (userId: string, productId: string) => {
  const cart = await db.cart.delete({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
  });

  return cart;
};
